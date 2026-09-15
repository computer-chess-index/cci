# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3258<sub>(+new) | 3449<sub>(+new) | 3513<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3098<sub>(+new) | 3329<sub>(+new) | 3389<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2911<sub>(+268) | 3166<sub>(+266) | 3212<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2643<sub>(-45) | 2900<sub>(-11) | 3011<sub>(-14) |  |
| 2.2.0 | 2025-11-20 | 2688<sub>(+159) | 2911<sub>(+126) | 3025<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2529<sub>(+49) | 2785<sub>(-5) | 2873<sub>(-1) |  |
| 2.1.1 | 2025-11-05 | 2480<sub>(-53) | 2790<sub>(+31) | 2874<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2533 | 2759 | 2827 |  |
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

Generated: 2026-09-15 04:41:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2533, 2480, 2529, 2688, 2643, 2911, 3098, 3258]
  line "STC (8.0+0.08s)" [2533, 2480, 2529, 2688, 2643, 2911, 3098, 3258]
  line "LTC (60.0+0.60s)" [2759, 2790, 2785, 2911, 2900, 3166, 3329, 3449]
  line "" [2827, 2874, 2873, 3025, 3011, 3212, 3389, 3513]
  line "VLTC (2m24s+1.12s)" [2827, 2874, 2873, 3025, 3011, 3212, 3389, 3513]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3513 | 25 | 380 | 50% | 3513 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3449 | 24 | 410 | 51% | 3444 | 75% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3258 | 28 | 328 | 51% | 3252 | 64% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3389 | 24 | 410 | 50% | 3387 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3329 | 25 | 398 | 52% | 3316 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3098 | 24 | 482 | 51% | 3082 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3212 | 32 | 284 | 51% | 3206 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3166 | 31 | 288 | 52% | 3154 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2911 | 33 | 276 | 51% | 2892 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3011 | 35 | 236 | 48% | 3027 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2900 | 36 | 236 | 52% | 2886 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2643 | 39 | 212 | 47% | 2670 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3025 | 72 | 56 | 57% | 2971 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2911 | 66 | 72 | 49% | 2925 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2688 | 90 | 40 | 55% | 2646 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 54 | 108 | 49% | 2888 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2785 | 54 | 108 | 45% | 2844 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2529 | 55 | 118 | 40% | 2643 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2874 | 95 | 32 | 50% | 2873 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2790 | 64 | 72 | 47% | 2815 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2480 | 60 | 92 | 48% | 2495 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2827 | 53 | 108 | 50% | 2822 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2759 | 51 | 112 | 51% | 2753 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2533 | 53 | 116 | 46% | 2592 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |