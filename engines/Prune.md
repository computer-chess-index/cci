# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3096<sub>(+new) | 3326<sub>(+new) | 3384<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2912<sub>(+266) | 3166<sub>(+265) | 3210<sub>(+198) |  |
| 3.0.0 | 2025-12-06 | 2646<sub>(-46) | 2901<sub>(-8) | 3012<sub>(-13) |  |
| 2.2.0 | 2025-11-20 | 2692<sub>(+159) | 2909<sub>(+123) | 3025<sub>(+151) |  |
| 2.1.2 | 2025-11-06 | 2533<sub>(+46) | 2786<sub>(-6) | 2874<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2487<sub>(-50) | 2792<sub>(+30) | 2874<sub>(+46) |  |
| 2.1.0 | 2025-11-02 | 2537<sub>(+new) | 2762<sub>(+new) | 2828<sub>(+new) |  |
| 2.0.1 | 2025-10-21 |  |  |  |  |
| 2.0.0 | 2025-10-19 |  |  |  |  |
| 1.0.1 | 2025-10-15 |  |  |  |  |
| 1.0.0 | 2025-10-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A3.2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:27:53

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2400 --> 3400
  line "STC (8.0+0.08s)" [2537, 2487, 2533, 2692, 2646, 2912, 3096]
  line "STC (8.0+0.08s)" [2537, 2487, 2533, 2692, 2646, 2912, 3096]
  line "LTC (60.0+0.60s)" [2762, 2792, 2786, 2909, 2901, 3166, 3326]
  line "VLTC (2m24s+1.12s)" [2828, 2874, 2874, 3025, 3012, 3210, 3384]
  line "VLTC (2m24s+1.12s)" [2828, 2874, 2874, 3025, 3012, 3210, 3384]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3384 | 25 | 398 | 50% | 3383 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3326 | 25 | 390 | 52% | 3312 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3096 | 25 | 410 | 51% | 3082 | 63% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3210 | 32 | 284 | 51% | 3205 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 31 | 288 | 52% | 3155 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2912 | 33 | 276 | 51% | 2893 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 35 | 236 | 48% | 3027 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2901 | 36 | 236 | 52% | 2888 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2646 | 39 | 212 | 47% | 2673 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 72 | 56 | 57% | 2971 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 66 | 72 | 49% | 2925 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2692 | 90 | 40 | 55% | 2650 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 54 | 108 | 49% | 2888 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2786 | 54 | 108 | 45% | 2846 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2533 | 55 | 118 | 40% | 2646 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 95 | 32 | 50% | 2873 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2792 | 64 | 72 | 47% | 2816 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2487 | 60 | 92 | 48% | 2502 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 53 | 108 | 50% | 2823 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2762 | 51 | 112 | 51% | 2755 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2537 | 53 | 116 | 46% | 2596 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |