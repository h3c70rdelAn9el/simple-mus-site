<template>
<Layout>
  <!-- TODO: CONNECT TO FIREBASE/GOOGLE CALENDAR -->
  <div class="m-auto">
    <h1 class="text-2xl text-center pb-2 mt-2 my-2">Calendar</h1>
    <div class='mx-2 pb-3 flex justify-between'>
      <h2 class="font-bold">{{ currentMonthName }}</h2>
      <h2 class="font-bold mx-2">{{ currentYear }}</h2>
    </div>
    <section class="flex text-center">
      <p class=" h-10 text-center" style="width:14.28%" v-for="day in days" :key='day'>
        {{ day }}
      </p>
    </section>
    <section class="flex flex-wrap">
      <p class="h-10 text-center" style="width:14.28%" v-for="num in startDay()" :key="num">
      </p>
      <p class="h-10 text-center" style="width:14.28%" v-for="num in daysInMonth()" :key="num" :class="currentDateClass(num)">
        {{ num }}
      </p>
    </section>
    <section class="flex justify-between mx-8 my-2">
      <button class="px-2 border rounded hover:bg-blue-400" @click="prev">prev</button>
      <button class="px-2 border rounded hover:bg-blue-400" @click="next">next</button>
    </section>
    <hr>
    <div class="w-full flex mt-4 mb-4">
      <table class="table-auto w-2/3 mx-auto">
        <thead>
          <tr class="mx-2 bg-gray-300">
            <th class="px-4 py-2 text-center">Venue</th>
            <th class="px-4 py-2 text-center">City</th>
            <th class="px-4 py-2 text-center">Country</th>
            <th class="px-4 py-2 text-center">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" class="p-2">
            <td class="px-4 py-2 text-center">{{ row.venue }}</td>
            <td class="px-4 py-2 text-center">{{ row.city }}</td>
            <td class="px-4 py-2 text-center">{{ row.country }}</td>
            <td class="px-4 py-2 text-center">{{ row.date }}</td>
          </tr>
        </tbody>
      </table>

    </div>
  </div>
</Layout>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth(),
      days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      currentYear: new Date().getFullYear(),
      rows: [{
          venue: "Glass House",
          city: "Pomona",
          country: "US",
          date: '12/20/2020'
        },
        {
          venue: "Country Club",
          city: "Los Angeles",
          country: "US",
          date: '1/4/2021'
        },
        {
          venue: "CBGB's",
          city: "New York City",
          country: "US",
          date: '1/10/2021'
        },
        {
          venue: "Fred's",
          city: "New York City",
          country: "US",
          date: '1/14/2021'
        },
      ]
    }
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0
        this.currentYear++
      } else {
        this.currentMonth++
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11
        this.currentYear--
      } else {
        this.currentMonth--
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString()
      return calendarFullDate === currentFullDate ? 'text-blue-400' : '';
    }
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {
        month: 'long'
      });
    },
    "columns": function columns() {
      if (this.rows.length == 0) {
        return [];
      }
      return Object.keys(this.rows[0])
    }
  },
}
</script>
