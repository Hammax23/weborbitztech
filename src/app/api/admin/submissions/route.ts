import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure data directory and file exist
function ensureDataFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ submissions: [] }, null, 2));
  }
}

// Read submissions from file
function readSubmissions() {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(data);
}

// Write submissions to file
function writeSubmissions(data: { submissions: unknown[] }) {
  ensureDataFile();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// GET - Retrieve all submissions
export async function GET() {
  try {
    const data = readSubmissions();
    // Sort by date, newest first
    data.submissions.sort((a: { submittedAt: string }, b: { submittedAt: string }) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return NextResponse.json({ submissions: [] });
  }
}

// POST - Add new submission
export async function POST(request: NextRequest) {
  try {
    const submission = await request.json();
    const data = readSubmissions();
    
    const newSubmission = {
      id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      ...submission,
      submittedAt: new Date().toISOString(),
      status: 'new',
    };
    
    data.submissions.push(newSubmission);
    writeSubmissions(data);
    
    return NextResponse.json({ success: true, submission: newSubmission });
  } catch (error) {
    console.error('Error saving submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save submission' },
      { status: 500 }
    );
  }
}

// PATCH - Update submission status
export async function PATCH(request: NextRequest) {
  try {
    const { id, status } = await request.json();
    const data = readSubmissions();
    
    const index = data.submissions.findIndex((s: { id: string }) => s.id === id);
    if (index !== -1) {
      data.submissions[index].status = status;
      writeSubmissions(data);
      return NextResponse.json({ success: true });
    }
    
    return NextResponse.json(
      { success: false, message: 'Submission not found' },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update submission' },
      { status: 500 }
    );
  }
}
