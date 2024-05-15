import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8">
        <div className="md:w-1/2">
          <Image
            src="/images/thestoicmonk/meditate.png"
            alt="TheStoicMonk"
            width={300}
            height={200}
            className="rounded-2xl"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-center">TheStoicMonk</h1>
          <p className="text-center mt-5">
            Meditation & Journaling App with Stoic Quotes & Philosophy.
          </p>
          <div className="mt-8">
            <a
              href="https://forms.gle/4JPwXVRRb8ABqBaY7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-block"
            >
              Join Testing on Play Store
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h1 className="text-2xl font-bold">Description</h1>
        <p className="mt-2">
          The Stoic Monk is a comprehensive mindfulness app that helps you
          cultivate inner peace, clarity, and purpose through meditation,
          journaling, daily goal-setting, and inspiring stoic quotes. Start your
          day with ambient meditation and reflection on thoughts, emotions, and
          experiences. Stay motivated with daily goals and stay inspired with
          thought-provoking stoic quotes. Whether seeking to reduce stress,
          increase productivity, or cultivate calm, The Stoic Monk is the
          perfect companion for your mindfulness journey.
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-bold">Features</h2>
        <ul className="list-disc list-inside mt-2">
          <li>Find your inner peace with meditation sessions.</li>
          <li>Capture your thoughts & emotions in your personal journal.</li>
          <li>Inspiring quotes to uplift your spirit, one moment at a time.</li>
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-lg font-bold">App support & request</h2>
        <p className="mt-2">
          If you have any questions or feature requests, please{" "}
          <a
            href="mailto:jayadky@yahoo.com"
            className="text-blue-500 hover:underline"
          >
            email
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/jayadky"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            tweet me
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
