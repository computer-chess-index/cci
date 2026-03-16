# Engine: Soomi

Author: Laukkanen Otto

Home: https://github.com/Koma1867/Soomi-V1-Chess-engine-in-golang

## Ratings nach Version

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2025-12-31 | 2080<sub>(+214) | 2367<sub>(+179) | 2476<sub>(+242) |  |
| 1.1.8 | 2025-12-16 | 1866<sub>(-8) | 2188<sub>(+48) | 2234<sub>(+43) |  |
| 1.1.7 | 2025-12-07 | 1874<sub>(+56) | 2140<sub>(-47) | 2191<sub>(-10) |  |
| 1.1.6 | 2025-11-30 | 1818 | 2187 | 2201 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-03-16 06:26:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.6", "1.1.7", "1.1.8", "1.2.0"]
  y-axis "Elo Rating" 1800 --> 2500
  line "STC (8.0+0.08s)" [1818, 1874, 1866, 2080]
  line "STC (8.0+0.08s)" [1818, 1874, 1866, 2080]
  line "LTC (60.0+0.60s)" [2187, 2140, 2188, 2367]
  line "VLTC (2m24s+1.12s)" [2201, 2191, 2234, 2476]
  line "VLTC (2m24s+1.12s)" [2201, 2191, 2234, 2476]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
