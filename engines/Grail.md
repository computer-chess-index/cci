# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2944<sub>(+51) | 3143<sub>(-9) | 3213<sub>(-31) |  |
| 2.0.0 | 2026-05-11 | 2893<sub>(+100) | 3152<sub>(+87) | 3244<sub>(+82) |  |
| 1.1.0 | 2026-02-28 | 2793<sub>(+348) | 3065<sub>(+358) | 3162<sub>(+319) |  |
| 1.0.4 | 2026-01-16 | 2445<sub>(+128) | 2707<sub>(+38) | 2843<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2317<sub>(+26) | 2669<sub>(+113) | 2742<sub>(+73) |  |
| 1.0.2 | 2025-12-16 | 2291<sub>(+28) | 2556<sub>(+19) | 2669<sub>(-53) |  |
| 1.0.1 | 2025-12-10 | 2263<sub>(+37) | 2537<sub>(-12) | 2722<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2226 | 2549 | 2773 |  |
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

Generated: 2026-06-11 06:24:49

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2793, 2893, 2944]
  line "STC (8.0+0.08s)" [2226, 2263, 2291, 2317, 2445, 2793, 2893, 2944]
  line "LTC (60.0+0.60s)" [2549, 2537, 2556, 2669, 2707, 3065, 3152, 3143]
  line "VLTC (2m24s+1.12s)" [2773, 2722, 2669, 2742, 2843, 3162, 3244, 3213]
  line "VLTC (2m24s+1.12s)" [2773, 2722, 2669, 2742, 2843, 3162, 3244, 3213]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3213 | 71 | 52 | 52% | 3198 | 62% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3143 | 83 | 40 | 54% | 3117 | 53% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2944 | 77 | 56 | 63% | 2823 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3244 | 29 | 316 | 51% | 3237 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3152 | 29 | 322 | 48% | 3164 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2893 | 29 | 352 | 52% | 2873 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 27 | 392 | 53% | 3143 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3065 | 28 | 356 | 51% | 3052 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2793 | 28 | 398 | 51% | 2784 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2843 | 34 | 272 | 49% | 2851 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2707 | 35 | 252 | 50% | 2709 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2445 | 31 | 348 | 55% | 2400 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2742 | 43 | 172 | 50% | 2746 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2669 | 45 | 160 | 51% | 2664 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2317 | 44 | 172 | 51% | 2310 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2669 | 38 | 214 | 50% | 2670 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2556 | 35 | 264 | 46% | 2593 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2291 | 41 | 212 | 55% | 2246 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2722 | 42 | 180 | 52% | 2707 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2537 | 40 | 202 | 53% | 2510 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2263 | 50 | 142 | 48% | 2282 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2773 | 61 | 92 | 42% | 2843 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2549 | 59 | 92 | 46% | 2584 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2226 | 67 | 82 | 59% | 2142 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |