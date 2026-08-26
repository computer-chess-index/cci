# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2940<sub>(+33) | 3205<sub>(+39) | 3281<sub>(+22) |  |
| 2.0.0 | 2026-05-11 | 2907<sub>(+103) | 3166<sub>(+88) | 3259<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2804<sub>(+354) | 3078<sub>(+362) | 3177<sub>(+323) |  |
| 1.0.4 | 2026-01-16 | 2450<sub>(+127) | 2716<sub>(+38) | 2854<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2323<sub>(+25) | 2678<sub>(+113) | 2753<sub>(+75) |  |
| 1.0.2 | 2025-12-16 | 2298<sub>(+29) | 2565<sub>(+20) | 2678<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2269<sub>(+35) | 2545<sub>(-13) | 2732<sub>(-54) |  |
| 1.0.0 | 2025-12-05 | 2234 | 2558 | 2786 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-26 06:25:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2234, 2269, 2298, 2323, 2450, 2804, 2907, 2940]
  line "STC (8.0+0.08s)" [2234, 2269, 2298, 2323, 2450, 2804, 2907, 2940]
  line "LTC (60.0+0.60s)" [2558, 2545, 2565, 2678, 2716, 3078, 3166, 3205]
  line "VLTC (2m24s+1.12s)" [2786, 2732, 2678, 2753, 2854, 3177, 3259, 3281]
  line "VLTC (2m24s+1.12s)" [2786, 2732, 2678, 2753, 2854, 3177, 3259, 3281]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3281 | 26 | 396 | 52% | 3266 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3205 | 26 | 392 | 51% | 3200 | 59% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2940 | 26 | 430 | 52% | 2921 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 29 | 316 | 51% | 3252 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 29 | 322 | 48% | 3178 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2907 | 29 | 352 | 52% | 2886 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3177 | 27 | 392 | 53% | 3156 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3078 | 28 | 356 | 51% | 3066 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2804 | 28 | 398 | 51% | 2793 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2854 | 34 | 272 | 49% | 2862 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2716 | 35 | 252 | 50% | 2719 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2450 | 31 | 348 | 55% | 2406 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2753 | 43 | 172 | 50% | 2757 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2678 | 45 | 160 | 51% | 2673 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2323 | 44 | 172 | 51% | 2317 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2678 | 38 | 214 | 50% | 2680 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2565 | 35 | 264 | 46% | 2603 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2298 | 41 | 212 | 55% | 2253 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2732 | 42 | 180 | 52% | 2718 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2545 | 40 | 202 | 53% | 2518 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2269 | 50 | 142 | 48% | 2288 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2786 | 61 | 92 | 42% | 2855 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 59 | 92 | 46% | 2592 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2234 | 67 | 82 | 59% | 2149 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |