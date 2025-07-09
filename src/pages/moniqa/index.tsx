import React from "react";
import "animate.css";
import Image from "next/image";

function MoniqaPage() {
  return (
    <div className="container mx-auto px-4 py-8 animate__animated animate__slideInLeft">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Image
            src="/images/moniqa/icon-simple.png"
            alt="Moniqa App Icon"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-lg" // Optional: if you want rounded corners for the icon
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Moniqa</h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-2">
          Personal Finance Tracker
        </p>
        <p className="text-lg mb-8">
          Track your money without friction. Simple, private, and powerful
          expense tracking.
        </p>

        <div className="mt-8">
          <a
            href="https://play.google.com/store/apps/details?id=com.jayadky.moniqa"
            target="_blank"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-colors duration-200"
          >
            Download in Play Store
          </a>
        </div>
      </div>

      {/* Why Moniqa Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🌟 Why Moniqa?</h2>
        <p className="text-justify">
          Take control of your finances with a clean, intuitive expense tracker
          that puts privacy first. No cloud storage, no data sharing - your
          financial information stays securely on your device.
        </p>
      </div>

      {/* Key Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">💰 Key Features</h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">
              📊 Smart Expense Tracking
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Add expenses and income in seconds</li>
              <li>Quick search to find any transaction instantly</li>
              <li>Swipe to delete unwanted entries</li>
              <li>Edit transactions with a simple tap</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">📈 Visual Analytics</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Monthly, weekly, and yearly spending trends</li>
              <li>Top spending categories analysis</li>
              <li>Income vs expense comparisons</li>
              <li>Line graphs for financial insights</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">💳 Budget Management</h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Set monthly budgets and track progress</li>
              <li>Real-time budget vs spending visualization</li>
              <li>Category-wise budget allocation</li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-xl font-bold mb-3">
              🎨 Personalized Experience
            </h3>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Dark mode for comfortable viewing</li>
              <li>Multiple custom themes</li>
              <li>Clean, modern interface</li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Privacy & Security Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🔒 Privacy & Security</h2>
        <div className="space-y-2">
          <div className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>
              <strong>100% Local Storage</strong> - Your data never leaves your
              device
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>
              <strong>No Account Required</strong> - Start tracking immediately
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>
              <strong>Works Offline</strong> - No internet connection needed
            </span>
          </div>
          <div className="flex items-start">
            <span className="text-green-500 mr-2">✅</span>
            <span>
              <strong>MMKV Encryption</strong> - Fast, secure local database
            </span>
          </div>
        </div>
      </div>

      {/* Premium Features Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">⭐ Premium Features</h2>
        <p className="text-sm text-gray-600 mb-4">(One-time purchase)</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold">Advanced Budgeting</h3>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Category-wise budget management</li>
              <li>Recurring expenses and income tracking</li>
              <li>Custom date range filtering</li>
            </ul>
          </div>

          {/* <div>
            <h3 className="text-lg font-bold">Data Export & Backup</h3>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Export to CSV format</li>
              <li>Complete data backup and restore</li>
            </ul>
          </div> */}

          <div>
            <h3 className="text-lg font-bold">
              Data Export & App Customization
            </h3>
            <ul className="list-disc list-inside ml-4 mt-2">
              <li>Export Data to CSV format</li>
              <li>Multiple app themes and color schemes</li>
              <li>Advanced appearance options</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Perfect For Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">🚀 Perfect For</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Students managing allowances and expenses</li>
          <li>Young professionals starting their financial journey</li>
          <li>Privacy-conscious users who prefer offline apps</li>
          <li>Anyone wanting simple, friction-free expense tracking</li>
          <li>Budget-conscious individuals optimizing spending</li>
        </ul>
      </div>

      {/* Quick Start Section
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">⚡ Quick Start</h2>
        <ol className="list-decimal list-inside space-y-2 ml-4">
          <li>
            <strong>Install the App:</strong> Download Moniqa from the App Store
            or Google Play.
          </li>
          <li>
            <strong>Personalise:</strong> Customize your currency, set your
            budget, and choose categories.(you can always change them later)
          </li>
          <li>
            <strong>Start Tracking:</strong> Add your first expense or income
            source in seconds
          </li>
          <li>
            <strong>Explore Insights:</strong> Check the dashboard for a quick
            overview of your financial health.
          </li>
        </ol>
      </div> */}

      {/* What Makes Moniqa Different */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          🎯 What Makes Moniqa Different
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Privacy First</strong> - Your financial data stays private
          </li>
          <li>
            <strong>No Subscriptions</strong> - Premium features with one-time
            purchase
          </li>
          <li>
            <strong>Lightning Fast</strong> - Add transactions in 5 seconds
          </li>
          <li>
            <strong>Comprehensive</strong> - Track, analyze, and optimize your
            spending
          </li>
          <li>
            <strong>Ad-Free</strong> - Clean experience without distractions
          </li>
        </ul>
      </div>

      {/* Call to Action Section */}
      <div className="text-center p-8 rounded-lg bg-emerald-300">
        <h2 className="text-2xl font-bold mb-4">
          Take Control of Your Financial Future
        </h2>
        <p className="text-lg mb-6">
          Track your money. Understand your habits. Make better financial
          decisions.
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=com.jayadky.moniqa"
          target="_blank"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-block transition-colors duration-200"
        >
          Download in Play Store
        </a>
      </div>

      {/* Contact Section */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          Have questions or feedback?{" "}
          <a
            href="mailto:jayadky@yahoo.com"
            className="text-blue-500 hover:underline"
          >
            Email me
          </a>{" "}
          or{" "}
          <a
            href="https://twitter.com/jayadky"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            reach out on Twitter
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default MoniqaPage;
