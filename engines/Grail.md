# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2932<sub>(+75) | 3222<sub>(+91) | 3306<sub>(+79) |  |
| 1.1.0 | 2026-02-28 | 2857<sub>(+353) | 3131<sub>(+361) | 3227<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2504<sub>(+128) | 2770<sub>(+38) | 2907<sub>(+102) |  |
| 1.0.3 | 2026-01-04 | 2376<sub>(+27) | 2732<sub>(+113) | 2805<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2349<sub>(+28) | 2619<sub>(+22) | 2732<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2321<sub>(+41) | 2597<sub>(-14) | 2785<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2280 | 2611 | 2836 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Grail+<version>&body=###%20Engine%20name%0AGrail%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-15 06:24:35

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2280, 2321, 2349, 2376, 2504, 2857, 2932]
  line "STC (8.0+0.08s)" [2280, 2321, 2349, 2376, 2504, 2857, 2932]
  line "LTC (60.0+0.60s)" [2611, 2597, 2619, 2732, 2770, 3131, 3222]
  line "VLTC (2m24s+1.12s)" [2836, 2785, 2732, 2805, 2907, 3227, 3306]
  line "VLTC (2m24s+1.12s)" [2836, 2785, 2732, 2805, 2907, 3227, 3306]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3306 | 34 | 228 | 50% | 3303 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3222 | 33 | 258 | 49% | 3229 | 50% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2932 | 37 | 224 | 51% | 2925 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3227 | 27 | 392 | 53% | 3208 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3131 | 28 | 356 | 51% | 3117 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2857 | 28 | 398 | 51% | 2847 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2907 | 34 | 272 | 49% | 2915 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2770 | 35 | 252 | 50% | 2773 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2504 | 31 | 348 | 55% | 2460 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2805 | 43 | 172 | 50% | 2809 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2732 | 45 | 160 | 51% | 2726 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2376 | 44 | 172 | 51% | 2369 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2732 | 38 | 214 | 50% | 2732 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2619 | 35 | 264 | 46% | 2655 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2349 | 41 | 212 | 55% | 2304 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2785 | 42 | 180 | 52% | 2770 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2597 | 40 | 202 | 53% | 2570 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2321 | 50 | 142 | 48% | 2340 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2836 | 61 | 92 | 42% | 2907 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2611 | 59 | 92 | 46% | 2646 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2280 | 67 | 82 | 59% | 2196 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |