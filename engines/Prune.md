# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3258<sub>(+new) | 3451<sub>(+new) | 3513<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3100<sub>(+new) | 3329<sub>(+new) | 3390<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2912<sub>(+269) | 3167<sub>(+267) | 3212<sub>(+200) |  |
| 3.0.0 | 2025-12-06 | 2643<sub>(-45) | 2900<sub>(-12) | 3012<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2688<sub>(+159) | 2912<sub>(+126) | 3027<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2529<sub>(+49) | 2786<sub>(-6) | 2874<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2480<sub>(-53) | 2792<sub>(+31) | 2874<sub>(+46) |  |
| 2.1.0 | 2025-11-02 | 2533 | 2761 | 2828 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Prune+<version>&body=###%20Engine%20name%0APrune%0A%0A###%20Version%0A4.0.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-20 04:40:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2533, 2480, 2529, 2688, 2643, 2912, 3100, 3258]
  line "STC (8.0+0.08s)" [2533, 2480, 2529, 2688, 2643, 2912, 3100, 3258]
  line "LTC (60.0+0.60s)" [2761, 2792, 2786, 2912, 2900, 3167, 3329, 3451]
  line "" [2828, 2874, 2874, 3027, 3012, 3212, 3390, 3513]
  line "VLTC (2m24s+1.12s)" [2828, 2874, 2874, 3027, 3012, 3212, 3390, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 24 | 388 | 50% | 3513 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3451 | 24 | 410 | 51% | 3445 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3258 | 28 | 328 | 51% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3390 | 24 | 410 | 50% | 3387 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3329 | 25 | 398 | 52% | 3316 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3100 | 24 | 482 | 51% | 3083 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3212 | 32 | 284 | 51% | 3208 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 31 | 288 | 52% | 3155 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2912 | 33 | 276 | 51% | 2893 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3012 | 35 | 236 | 48% | 3028 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2900 | 36 | 236 | 52% | 2888 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2643 | 39 | 212 | 47% | 2670 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3027 | 72 | 56 | 57% | 2973 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2912 | 66 | 72 | 49% | 2927 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 90 | 40 | 55% | 2646 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 54 | 108 | 49% | 2889 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2786 | 54 | 108 | 45% | 2846 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2529 | 55 | 118 | 40% | 2643 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 95 | 32 | 50% | 2873 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2792 | 64 | 72 | 47% | 2816 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2480 | 60 | 92 | 48% | 2495 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2828 | 53 | 108 | 50% | 2823 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2761 | 51 | 112 | 51% | 2753 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2533 | 53 | 116 | 46% | 2592 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |