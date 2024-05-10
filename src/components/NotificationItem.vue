<template>
  <div class="divide-y-2 divide-gray-200 text-lg">
    <!-- Example notification item -->

    <!-- notification 1 -->
    <div class="flex items-start justify-between py-5">
      <!-- User image -->
      <div class="relative flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFf3EclldhcVYfE8yFGQKPJqUdYDjl0JJLujbqL053w&s"
          alt="User"
          class="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <!-- Notification type icon -->
        <span
          class="material-symbols-outlined absolute bottom-0 right-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center"
          style="transform: translate(25%, 0)"
        >
          event
        </span>
      </div>
      <div>
        <!-- Notification content -->
        <div class="flex flex-col w-full ml-4">
          <p>
            <!-- Username -->
            <span class="text-black font-semibold">Amanda Haydenson</span>
            <!-- Notification details -->
            <span class="text-gray-500">
              changed the delivery date of
              <span class="text-blue-500 font-semibold">Design project</span>
              to Sep 25</span
            >
          </p>
          <!-- Time and team name -->
          <div class="flex items-center justify-start mt-2.5">
            <span class="text-gray-500 mr-2">Yesterday &bullet;</span>
            <div class="flex space-x-1">
              <span
                class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                >spa</span
              >
              <span class="text-gray-500 underline underline-offset-4"
                >Design Team</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- notification 2 -->
    <div class="flex items-start justify-between py-5">
      <!-- User image -->
      <div class="relative flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtTKj6DF01bq5aKBesgbJ9QkGL8XafAuFcQ&s"
          alt="User"
          class="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <!-- Notification type icon -->
        <span
          class="material-symbols-outlined absolute bottom-0 right-0 w-5 h-5 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center"
          style="transform: translate(25%, 0)"
        >
          notes
        </span>
      </div>
      <div>
        <!-- Notification content -->
        <div class="flex flex-col w-full ml-4">
          <p>
            <!-- Username -->
            <span class="text-black font-semibold">Billy the Kid</span>
            <!-- Notification details -->
            <span class="text-gray-500">
              commented on the status of
              <span class="text-blue-500 font-semibold">Design project</span>
            </span>
          </p>
          <!-- Time and team name -->
          <div class="flex items-center justify-start mt-2.5">
            <span class="text-gray-500 mr-2">Yesterday &bullet;</span>
            <div class="flex space-x-1">
              <span
                class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                >spa</span
              >
              <span class="text-gray-500 underline underline-offset-4"
                >Design Team</span
              >
            </div>
          </div>
          <div class="border-l-4 mt-2.5 px-4">
            <div>
              <span class="text-gray-500">
                <span class="text-black font-semibold">@chunkofunk</span> have
                you got the latest designs for the new concepts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- notification 3 -->
    <div class="flex items-start justify-between py-5">
      <!-- User image -->
      <div class="relative flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SPOPL_7v8VW82mBqZ5M9PML8Q2v7yq8SWh1tywseGMQCgKO1aHMvF8pZS92RTt51m4w&usqp=CAU"
          alt="User"
          class="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <!-- Notification type icon -->
        <span
          class="material-symbols-outlined absolute bottom-0 right-0 w-5 h-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center"
          style="transform: translate(25%, 0)"
        >
          notifications
        </span>
      </div>
      <div>
        <!-- Notification content -->
        <div class="flex flex-col w-full ml-4">
          <p>
            <!-- Username -->
            <span class="text-black font-semibold">James Hetfield</span>
            <!-- Notification details -->
            <span class="text-gray-500">
              is requesting access to &nbsp;
              <span class="text-blue-500 font-semibold">Design project</span>
            </span>
          </p>
          <!-- Time and team name -->
          <div class="flex items-center justify-start mt-2.5">
            <span class="text-gray-500 mr-2">Yesterday &bullet;</span>
            <div class="flex space-x-1">
              <span
                class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                >spa</span
              >
              <span class="text-gray-500 underline underline-offset-4"
                >Design Team</span
              >
            </div>
          </div>

          <div class="flex items-center justify-start gap-2 mt-2.5">
            <button
              class="btn btn-sm rounded-lg bg-white border-2 border-gray-200 shadow-md px-1.5"
            >
              Decline
            </button>
            <button
              class="btn btn-sm bg-blue-600 text-white font-thin rounded-lg px-2"
            >
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- notification 4 -->
    <div class="flex items-start justify-between py-5">
      <!-- User image -->
      <div class="relative flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcX6p8KrVESV2N1xIl48zHpQoiiI3QipB9wSJHhrl0GMRiTciLUeVwkPK-cmmnzS2cjg&usqp=CAU"
          alt="User"
          class="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <!-- Notification type icon -->
        <span
          class="material-symbols-outlined absolute bottom-0 right-0 w-5 h-5 rounded-full bg-gray-500 text-white text-xs flex items-center justify-center"
          style="transform: translate(25%, 0)"
        >
          edit
        </span>
      </div>
      <div>
        <!-- Notification content -->
        <div class="flex flex-col w-full ml-4">
          <p>
            <!-- Username -->
            <span class="text-black font-semibold">Lisa Lowis </span>
            <!-- Notification details -->
            <span class="text-gray-500"
              >cadded the following tags to
              <span class="text-blue-500 font-semibold"
                >Design project</span
              ></span
            >
          </p>
          <!-- Time and team name -->
          <div class="flex items-center justify-start mt-2.5">
            <span class="text-gray-500 mr-2">Yesterday &bullet;</span>
            <div class="flex space-x-1">
              <span
                class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                >spa</span
              >
              <span class="text-gray-500 underline underline-offset-4"
                >Design Team</span
              >
            </div>
          </div>
          <!-- Tags -->
          <div class="flex items-center justify-start mt-2.5 gap-2">
            <span
              class="bg-blue-100 rounded-lg text-blue-800 px-1.5 py-0 text-semibold"
              >Design</span
            >
            <span
              class="bg-green-100 rounded-lg text-green-800 px-1.5 py-0 text-semibold"
              >Saas</span
            >
            <span
              class="bg-teal-100 rounded-lg text-teal-800 px-1.5 py-0 text-semibold"
              >Project</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- notification 5 -->
    <div class="flex items-start justify-between py-5">
      <!-- User image -->
      <div class="relative flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP58vfGWfJCqtoQZ8VA2q1XzYr7VJZVa0yEBvQZ4UfnlGZHWxuu1VXkeP-VuK9pVJWMY&usqp=CAU"
          alt="User"
          class="w-12 h-12 rounded-full object-cover overflow-hidden"
        />
        <!-- Notification type icon -->
        <span
          class="material-symbols-outlined absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-600 text-white text-xs flex items-center justify-center"
          style="transform: translate(25%, 0)"
        >
          upload_file
        </span>
      </div>
      <div>
        <!-- Notification content -->
        <div class="flex flex-col w-full ml-4">
          <p>
            <!-- Username -->
            <span class="text-black font-semibold">John Carpenter</span>
            <!-- Notification details -->
            <span class="text-gray-500">
              uploaded a file to
              <span class="text-blue-500 font-semibold">Design project</span>
            </span>
          </p>
          <!-- Time and team name -->
          <div class="flex items-center justify-start mt-2.5">
            <span class="text-gray-500 mr-2">Yesterday &bullet;</span>
            <div class="flex space-x-1">
              <span
                class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                >spa</span
              >
              <span class="text-gray-500 underline underline-offset-4"
                >Design Team</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationItem",
};
</script>
