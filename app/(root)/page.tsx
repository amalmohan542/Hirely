import { Button } from '@/components/ui/button'
import { dummyInterviews } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InterviewCard from '../components/InterviewCard'
import { getCurrentUser} from '@/lib/actions/auth.action'
import { getInterviewsByUserId, getLatestInterviews } from '@/lib/actions/general.action'

const HomePage = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! })
  ]);
  // console.log("userInterviews", userInterviews);
  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcommingInterviews = latestInterviews?.length! > 0;
  return (
    <>
      <section className='card-cta'>
        <div className=" flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Parctice & Feedback</h2>
          <p className='text-lg'>Practice on real interview questions & get instant feedback.</p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div >
        <Image src="/robot.png" alt="robot" width={400} height={400} className="max-sm:hidden" />
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>
        <div className='interviews-section'>
          {hasPastInterviews ? (userInterviews?.map((interview) => (<InterviewCard key={interview.id} {...interview} />))) : <p>You haven&apos;t taken any interviews yet.</p>}
          {/**/}
        </div>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an interview</h2>
        <div className='interviews-section'>
          {/* <p>There are no interview available.</p> */}
          {hasUpcommingInterviews ? latestInterviews?.map((interview) => (<InterviewCard key={interview.id} {...interview} />)) : <p>There are no interview available.</p>}

        </div>
      </section>
    </>
  )
}

export default HomePage