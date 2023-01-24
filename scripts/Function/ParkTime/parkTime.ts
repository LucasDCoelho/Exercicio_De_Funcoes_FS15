function parkTime(time: string) {
    if (time >= "05:00" && time <= "11:59") {
      console.log("Manhã")
    } else if (time >= "12:00" && time <= "17:59") {
      console.log("Tarde")
    } else if (time >= "18:00" && time <= "4:59") {
      console.log("Noite")
    }
  
  }
  
  parkTime("05:20") // Manhã
  parkTime("09:30") // Manhã
  parkTime("14:00") // Tarde
  parkTime("21:00") // Noite
  parkTime("2:00") // Noite
  parkTime("4:10") // Noite
  parkTime("11:10") // Manhã
  parkTime("13:55") // Tarde
  parkTime("17:30") // Tarde
  parkTime("20:29") // Noite