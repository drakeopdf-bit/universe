"use client";

import { motion } from "framer-motion";

export default function LoveLetter() {
  return (
    <section className="relative overflow-hidden bg-[#020205] px-6 py-32 text-white">

      {/* Background glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-3xl">

        {/* Opening */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mb-24 text-center"
        >

          <p className="text-xs uppercase tracking-[8px] text-violet-400">
            ONE LAST THING
          </p>

          <div className="mt-10 text-5xl">
            ✦
          </div>

          <h2 className="mt-8 text-4xl font-bold md:text-6xl">
            Nidhu, my love...
          </h2>

          <p className="mt-6 text-gray-500">
            There's something I've been wanting to tell you.
          </p>

        </motion.div>


        {/* Letter */}

        <div className="space-y-16 text-lg leading-[2] text-gray-300 md:text-xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              <span className="text-violet-400">
                It's 11:11 PM...
              </span>
            </p>

            <p className="mt-6">
              Hahhaa... I'm so so sooo excited to meet you.
            </p>

            <p className="mt-6">
              I don't even know what's happening to me right now.
              Khushi bhi ho rahi hai bohot... and this wait?
            </p>

            <p className="mt-6">
              I just keep thinking—
            </p>

            <p className="mt-6 text-center text-xl italic text-white md:text-2xl">
              kab yeh raat khatam hogi,
              <br />
              kab subah hogi,
              <br />
              aur kab main tere paas pahuchunga?
            </p>

            <p className="mt-6 text-center text-2xl">
              Yaaay!!!! ❤️
            </p>

          </motion.div>


          {/* Beginning */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              And then I think about how all of this started...
            </p>

            <p className="mt-6">
              It started with so many conversations.
              Hours and hours of talking.
            </p>

            <p className="mt-6">
              And then came our <span className="text-white">first meeting...</span>
            </p>

            <p className="mt-6">
              That one day where we finally got to sit together,
              spend time together, eat together...
              and for a little while, the distance between us simply didn't exist.
            </p>

            <p className="mt-6 text-center text-2xl font-medium text-white">
              We were finally not two people behind screens.
              <br />
              <span className="text-violet-400">
                We were just us.
              </span>
            </p>

          </motion.div>


          {/* Fights */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              And then came our fights. 😂
            </p>

            <p className="mt-6">
              God... those fights.
            </p>

            <p className="mt-6">
              Fighting on the phone, getting angry at each other,
              saying things we probably shouldn't...
            </p>

            <p className="mt-6">
              And then, barely <span className="text-white">15 minutes later—</span>
            </p>

            <p className="mt-6 text-center text-2xl text-white">
              "sorry..."
            </p>

            <p className="mt-3 text-center text-gray-500">
              from you.
            </p>

            <p className="mt-6 text-center text-2xl text-white">
              And probably another "sorry" from me.
            </p>

            <p className="mt-6 text-center text-3xl">
              Hahhaha.
            </p>

            <p className="mt-6 text-center text-xl text-violet-300">
              Honestly?
              <br />
              Those were some of the best parts.
            </p>

          </motion.div>


          {/* Mussoorie */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p className="text-center text-3xl font-semibold text-white">
              And then came Mussoorie. 🏔️
            </p>

            <p className="mt-8">
              I think that trip will always have a special place in my heart.
            </p>

            <p className="mt-6">
              Because that wasn't just another meeting.
            </p>

            <p className="mt-6">
              We experienced each other in a way that felt almost like...
            </p>

            <p className="mt-6 text-center text-xl italic text-white md:text-2xl">
              this is what being together every day would actually feel like.
            </p>

            <p className="mt-6">
              No screen.
              <br />
              No waiting for a call.
              <br />
              No checking when the other person is online.
            </p>

            <p className="mt-6">
              Just waking up, going somewhere, eating together,
              walking together, talking nonsense...
            </p>

            <p className="mt-6 text-center text-2xl font-medium text-violet-300">
              living a little piece of our life together.
            </p>

          </motion.div>


          {/* Patience */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              And that's when I think I truly understood something.
            </p>

            <p className="mt-8 text-center text-3xl font-semibold text-white">
              The kind of patience we've had...
              <br />
              <span className="text-violet-400">
                it's phenomenal.
              </span>
            </p>

            <p className="mt-8">
              We somehow managed to beat distance.
            </p>

            <p className="mt-4">
              We managed to beat time.
            </p>

            <p className="mt-4">
              We waited for each other.
            </p>

            <p className="mt-4">
              Again and again.
            </p>

            <p className="mt-4 text-center text-xl text-white">
              Just for each other.
            </p>

            <p className="mt-8">
              And honestly, Nidhu...
            </p>

            <p className="mt-6">
              I didn't think you could be this patient.
            </p>

            <p className="mt-6 text-violet-300">
              You completely blew my mind.
            </p>

            <p className="mt-6">
              You shattered so many misconceptions I had in my head.
            </p>

            <p className="mt-6">
              You showed me that sometimes love isn't about constantly
              being together.
            </p>

            <p className="mt-6 text-center text-2xl font-medium text-white">
              Sometimes love is...
              <br />
              <span className="text-violet-400">
                waiting.
              </span>
            </p>

          </motion.div>


          {/* Everything */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              We've had our cutest phases.
            </p>

            <p className="mt-4">
              We've had our stupidest fights.
            </p>

            <p className="mt-4">
              We've had moments where everything felt perfect.
            </p>

            <p className="mt-4">
              And we've had moments where our spark almost disappeared
              into darkness.
            </p>

            <p className="mt-6">
              There were times when things felt boring.
            </p>

            <p className="mt-4">
              Times when things felt difficult.
            </p>

            <p className="mt-4">
              Times when we probably wondered where all that magic had gone.
            </p>

            <p className="mt-8 text-center text-2xl text-white">
              But somehow...
            </p>

            <p className="mt-6 text-center text-3xl font-bold text-violet-400">
              we found the light again.
            </p>

            <p className="mt-6 text-center text-xl">
              And not only did we find it—
              <br />
              <span className="text-white">
                we came back brighter.
              </span>
            </p>

          </motion.div>


          {/* Fifth Meeting */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >

            <p className="text-sm uppercase tracking-[7px] text-violet-400">
              OUR FIFTH MEETING
            </p>

            <p className="mt-8 text-2xl text-white md:text-3xl">
              And now...
            </p>

            <p className="mt-4 text-4xl font-bold md:text-6xl">
              it's our fifth meeting.
            </p>

            <p className="mx-auto mt-8 max-w-2xl">
              Five times I've finally gotten to see the person who spent
              so much time living inside my phone screen.
            </p>

            <p className="mt-8 text-2xl text-violet-300">
              Five times we've turned distance into something real.
            </p>

          </motion.div>


          {/* Proposal */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="py-20 text-center"
          >

            <div className="text-5xl">
              ❤️
            </div>

            <p className="mt-10 text-3xl font-bold text-white md:text-5xl">
              Nidhu...
            </p>

            <p className="mt-8 text-2xl text-violet-300">
              I love you.
            </p>

            <p className="mt-3 text-2xl text-violet-300">
              I love you from my heart.
            </p>

            <p className="mt-12 text-lg text-gray-500">
              And today...
            </p>

            <p className="mt-6 text-lg text-gray-400">
              I'm going to ask you one very simple question.
            </p>

            <p className="mt-3 text-sm text-gray-600">
              Don't take it in a funny way, okay?
            </p>

            <p className="mt-14 text-xl text-gray-400">
              Sweetu...
            </p>

            <p className="mt-8 text-3xl font-semibold text-white">
              Look here.
            </p>

            <p className="mt-3 text-3xl font-semibold text-white">
              Look at me.
            </p>

            <p className="mt-12 text-xl text-violet-300">
              I love you, dear.
            </p>

            <p className="mt-8 text-4xl font-bold md:text-6xl">
              Would you marry me?
            </p>

            <p className="mt-6 text-4xl">
              ❤️
            </p>

          </motion.div>


          {/* Forever */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p>
              I want to spend my life with you.
            </p>

            <p className="mt-6">
              Through the good days.
            </p>

            <p className="mt-4">
              Through the bad days.
            </p>

            <p className="mt-4">
              Through the thick and thin.
            </p>

            <p className="mt-6">
              Through the fights.
            </p>

            <p className="mt-4">
              Through the "I'm angry with you" moments.
            </p>

            <p className="mt-4">
              Through the "sorry" messages 15 minutes later. 😂
            </p>

            <p className="mt-4">
              Through boring days.
            </p>

            <p className="mt-4">
              Through crazy days.
            </p>

            <p className="mt-8 text-center text-xl text-white">
              Through everything life decides to throw at us.
            </p>

            <p className="mt-10 text-center text-2xl font-semibold text-violet-300">
              Because we've already beaten distance.
            </p>

            <p className="mt-4 text-center text-2xl font-semibold text-violet-300">
              We've already beaten time.
            </p>

            <p className="mt-8 text-center">
              We've already survived the phase where our spark went
              almost completely dark.
            </p>

            <p className="mt-8 text-center text-3xl font-bold text-white">
              And somehow...
            </p>

            <p className="mt-5 text-center text-3xl font-bold text-violet-400">
              we lit it again.
            </p>

            <p className="mt-3 text-center text-3xl font-bold text-violet-400">
              Brighter than before.
            </p>

          </motion.div>


          {/* Thank You */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center"
          >

            <p className="text-3xl font-bold text-white md:text-4xl">
              Thank you, Chiiku...
            </p>

            <p className="mt-8">
              For coming into my life.
            </p>

            <p className="mt-4">
              For being my person.
            </p>

            <p className="mt-4">
              For teaching me patience.
            </p>

            <p className="mt-4">
              For making me laugh.
            </p>

            <p className="mt-4">
              For making me angry. 😂
            </p>

            <p className="mt-4">
              For making me wait.
            </p>

            <p className="mt-4">
              For making me love.
            </p>

            <p className="mt-8">
              For all the calls.
              <br />
              All the fights.
              <br />
              All the apologies.
              <br />
              All the meetings.
              <br />
              All the food.
              <br />
              All the memories.
            </p>

            <p className="mt-8 text-xl text-violet-300">
              And all the little moments that somehow became
              the biggest parts of my life.
            </p>

            <p className="mt-10 text-2xl text-white">
              You really are...
            </p>

            <p className="mt-5 text-3xl font-bold text-violet-400">
              my love,
              <br />
              my Chiiku,
              <br />
              and my good-luck charm. ❤️
            </p>

          </motion.div>


          {/* Final Universe */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="py-20 text-center"
          >

            <div className="mx-auto h-20 w-20 rounded-full bg-violet-500/20 blur-2xl" />

            <div className="-mt-16 text-5xl">
              ✦
            </div>

            <p className="mt-10 text-xl text-gray-400">
              And if this universe we've built together
              has taught me anything...
            </p>

            <p className="mt-8 text-3xl font-bold text-white md:text-5xl">
              I don't want our story
              <br />
              to end at fourteen months.
            </p>

            <p className="mt-10 text-2xl text-violet-400">
              I want to keep adding stars.
            </p>

            <p className="mt-6 text-lg text-gray-500">
              One month.
              <br />
              One year.
              <br />
              One lifetime.
            </p>

            <div className="mx-auto mt-16 h-px w-32 bg-violet-500/30" />

            <p className="mt-16 text-sm uppercase tracking-[7px] text-violet-400">
              FOREVER YOURS
            </p>

            <p className="mt-6 text-4xl font-bold">
              Your Mohit. ❤️
            </p>

            <p className="mt-5 text-gray-500">
              Always.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}