<template>
  <div class="divide-y-2 divide-gray-400 text-lg px-1">
    <div v-for="(notification, index) in notifications" :key="index">


      <!-- Main Structure -->
      <div class="flex items-start justify-between py-5">


        <!-- User image -->
        <div class="relative flex-shrink-0">
          <img
            :src="notification.userImage"
            alt="User"
            class="w-12 h-12 rounded-full object-cover overflow-hidden"
          />


          <!-- Notification type icon -->
          <span
            :class="notificationTypeIconClasses(notification.type)"
            style="transform: translate(25%, 0)"
          >
            {{ notification.type }}
          </span>
        </div>
        <div>


          <!-- Notification content -->
          <div class="flex flex-col ml-4 flex-grow">
            <p class="w-full">


              <!-- Username -->
              <span class="text-black font-semibold"
                >{{ notification.userName }}&nbsp;</span
              >


              <!-- Notification details -->
              <span
                class="text-gray-500"
                v-html="highlightProject(notification.details)"
              ></span>
            </p>


            <!-- Time and team name -->
            <div class="flex items-center justify-start mt-2.5">
              <span class="text-gray-500 mr-2"
                >{{ notification.timestamp }} &bullet;</span
              >
              <div class="flex space-x-1">
                <span
                  class="material-symbols-outlined w-4 h-4 text-lg text-amber-600"
                  style="transform: translate(0%, -13%)"
                >
                  spa
                </span>
                <span class="text-gray-500 underline underline-offset-4">{{
                  notification.teamName
                }}</span>
              </div>
            </div>



            <!-- Additional details based on notification type -->
            <template v-if="notification.type === 'notes'">
              <div class="border-l-4 border-gray-400 mt-2.5 px-4">
                <div>
                  <span class="text-gray-500">
                    <span class="text-black font-semibold"
                      >@{{ notification.additionalData.username }}</span
                    >
                    {{ notification.additionalData.message }}
                  </span>
                </div>
              </div>
            </template>
            <template v-else-if="notification.type === 'notifications'">
              <div class="flex items-center justify-start gap-2 mt-2.5">
                <button
                  class="btn btn-sm rounded-lg bg-white border-2 border-gray-200 px-1.5"
                >
                  Decline
                </button>
                <button
                  class="btn btn-sm bg-blue-600 text-white font-thin rounded-lg px-2"
                >
                  Approve
                </button>
              </div>
            </template>
            <template v-else-if="notification.type === 'edit'">


              <!-- Tags -->
              <div class="flex items-center justify-start mt-2.5 gap-2">
                <span
                  v-for="(tag, index) in notification.tags"
                  :key="index"
                  :class="getTagClasses(tag.color)"
                >
                  {{ tag.name }}
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          userImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFf3EclldhcVYfE8yFGQKPJqUdYDjl0JJLujbqL053w&s",
          userName: "Amanda Haydenson",
          type: "event",
          details: "changed the delivery date of Design project to Sep 25",
          timestamp: "Yesterday",
          teamName: "Design Team",
        },
        {
          userImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXtTKj6DF01bq5aKBesgbJ9QkGL8XafAuFcQ&s",
          userName: "Billy the Kid",
          type: "notes",
          details: "commented on the status of Design project",
          timestamp: "Yesterday",
          teamName: "Design Team",
          additionalData: {
            username: "chunkofunk",
            message: "have you got the latest designs for the new concepts",
          },
        },
        {
          userImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0SPOPL_7v8VW82mBqZ5M9PML8Q2v7yq8SWh1tywseGMQCgKO1aHMvF8pZS92RTt51m4w&usqp=CAU",
          userName: "James Hetfield",
          type: "notifications",
          details: "is requesting access to Design project",
          timestamp: "Yesterday",
          teamName: "Design Team",
        },
        {
          userImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYcX6p8KrVESV2N1xIl48zHpQoiiI3QipB9wSJHhrl0GMRiTciLUeVwkPK-cmmnzS2cjg&usqp=CAU",
          userName: "Lisa Lowis",
          type: "edit",
          details: "added the following tags to Design project",
          timestamp: "Yesterday",
          teamName: "Design Team",
          tags: [
            { name: "Design", color: "blue" },
            { name: "Saas", color: "green" },
            { name: "Project", color: "teal" },
          ],
        },
        {
          userImage:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhP58vfGWfJCqtoQZ8VA2q1XzYr7VJZVa0yEBvQZ4UfnlGZHWxuu1VXkeP-VuK9pVJWMY&usqp=CAU",
          userName: "John Carpenter",
          type: "upload_file",
          details: "uploaded a file to Design project.",
          timestamp: "Yesterday",
          teamName: "Design Team",
        },
      ],
    };
  },
  methods: {
    notificationTypeIconClasses(type) {
      return {
        "material-symbols-outlined": true,
        absolute: true,
        "bottom-0": true,
        "right-0": true,
        "w-5": true,
        "h-5": true,
        "rounded-full": true,
        "bg-blue-600": type === "event" || type === "notes",
        "bg-amber-500": type === "notifications",
        "bg-green-600": type === "upload_file",
        "bg-gray-500": type === "edit",
        "text-white": true,
        "text-xs": true,
        flex: true,
        "items-center": true,
        "justify-center": true,
      };
    },
    highlightProject(details) {
      return details.replace(
        /Design project/g,
        '<span class="text-blue-500 font-semibold">Design project</span>'
      );
    },
    getTagClasses(color) {
      return `bg-${color}-200 text-${color}-800 rounded-lg px-1.5 py-0 font-semibold`;
    },
  },
};
</script>
