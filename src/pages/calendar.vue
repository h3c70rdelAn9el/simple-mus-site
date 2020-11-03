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
    <table class="table-auto mx-auto my-4 w-2/3">
      <thead class="bg-gray-200 rounded">
        <tr>
          <th class="px-4 py-2 text-center">Venue</th>
          <th class="px-4 py-2">City/Country</th>
          <th class="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="px-4 py-2 text-center">Paladium</td>
          <td class="px-4 py-2 text-center">Los Angeles/US</td>
          <td class="px-4 py-2 text-center">11/4/2020</td>
        </tr>
        <tr>
          <td class="px-4 py-2 text-center">Glass House</td>
          <td class="px-4 py-2 text-center">Pomona/US</td>
          <td class="px-4 py-2 text-center">11/20/2020</td>
        </tr>
        <tr>
          <td class="px-4 py-2 text-center">Artie's</td>
          <td class="px-4 py-2 text-center">San Francisco/US</td>
          <td class="px-4 py-2 text-center">12/8/2020</td>
        </tr>
      </tbody>
    </table>
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
    }
  },
}
</script>
