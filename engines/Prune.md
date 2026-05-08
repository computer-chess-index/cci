# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.2.1 | 2026-02-24 | 3144<sub>(+new) | 3372<sub>(+new) | 3428<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2955<sub>(+266) | 3210<sub>(+266) | 3255<sub>(+199) |  |
| 3.0.0 | 2025-12-06 | 2689<sub>(-46) | 2944<sub>(-10) | 3056<sub>(-14) |  |
| 2.2.0 | 2025-11-20 | 2735<sub>(+159) | 2954<sub>(+124) | 3070<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2576<sub>(+47) | 2830<sub>(-5) | 2917<sub>(-2) |  |
| 2.1.1 | 2025-11-05 | 2529<sub>(-51) | 2835<sub>(+28) | 2919<sub>(+48) |  |
| 2.1.0 | 2025-11-02 | 2580<sub>(+new) | 2807<sub>(+new) | 2871<sub>(+new) |  |
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

Generated: 2026-05-08 06:27:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1"]
  y-axis "Elo Rating" 2500 --> 3500
  line "STC (8.0+0.08s)" [2580, 2529, 2576, 2735, 2689, 2955, 3144]
  line "STC (8.0+0.08s)" [2580, 2529, 2576, 2735, 2689, 2955, 3144]
  line "LTC (60.0+0.60s)" [2807, 2835, 2830, 2954, 2944, 3210, 3372]
  line "VLTC (2m24s+1.12s)" [2871, 2919, 2917, 3070, 3056, 3255, 3428]
  line "VLTC (2m24s+1.12s)" [2871, 2919, 2917, 3070, 3056, 3255, 3428]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3428 | 25 | 398 | 50% | 3426 | 76% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3372 | 26 | 382 | 52% | 3356 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3144 | 26 | 398 | 51% | 3128 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3255 | 32 | 284 | 51% | 3249 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3210 | 31 | 288 | 52% | 3198 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2955 | 33 | 276 | 51% | 2936 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3056 | 35 | 236 | 48% | 3071 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2944 | 36 | 236 | 52% | 2931 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2689 | 39 | 212 | 47% | 2716 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3070 | 72 | 56 | 57% | 3015 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2954 | 66 | 72 | 49% | 2969 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2735 | 90 | 40 | 55% | 2692 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2917 | 54 | 108 | 49% | 2932 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2830 | 54 | 108 | 45% | 2890 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2576 | 55 | 118 | 40% | 2689 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2919 | 95 | 32 | 50% | 2916 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2835 | 64 | 72 | 47% | 2859 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2529 | 60 | 92 | 48% | 2543 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 53 | 108 | 50% | 2867 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2807 | 51 | 112 | 51% | 2800 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2580 | 53 | 116 | 46% | 2638 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |