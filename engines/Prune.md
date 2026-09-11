# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3255<sub>(+new) | 3448<sub>(+new) | 3510<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3097<sub>(+new) | 3328<sub>(+new) | 3387<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2909<sub>(+268) | 3164<sub>(+266) | 3210<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2641<sub>(-46) | 2898<sub>(-11) | 3009<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2687<sub>(+160) | 2909<sub>(+125) | 3024<sub>(+153) |  |
| 2.1.2 | 2025-11-06 | 2527<sub>(+48) | 2784<sub>(-5) | 2871<sub>(-2) |  |
| 2.1.1 | 2025-11-05 | 2479<sub>(-52) | 2789<sub>(+31) | 2873<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2531 | 2758 | 2826 |  |
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

Generated: 2026-09-11 04:41:10

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2531, 2479, 2527, 2687, 2641, 2909, 3097, 3255]
  line "STC (8.0+0.08s)" [2531, 2479, 2527, 2687, 2641, 2909, 3097, 3255]
  line "LTC (60.0+0.60s)" [2758, 2789, 2784, 2909, 2898, 3164, 3328, 3448]
  line "" [2826, 2873, 2871, 3024, 3009, 3210, 3387, 3510]
  line "VLTC (2m24s+1.12s)" [2826, 2873, 2871, 3024, 3009, 3210, 3387, 3510]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3510 | 25 | 368 | 50% | 3510 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3448 | 25 | 398 | 51% | 3443 | 74% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3255 | 29 | 320 | 51% | 3249 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 24 | 410 | 50% | 3384 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3328 | 25 | 398 | 52% | 3314 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3097 | 24 | 482 | 51% | 3081 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3210 | 32 | 284 | 51% | 3205 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 31 | 288 | 52% | 3152 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2909 | 33 | 276 | 51% | 2890 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3009 | 35 | 236 | 48% | 3025 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2898 | 36 | 236 | 52% | 2885 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2641 | 39 | 212 | 47% | 2669 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3024 | 72 | 56 | 57% | 2970 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2909 | 66 | 72 | 49% | 2924 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 90 | 40 | 55% | 2645 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 54 | 108 | 49% | 2886 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2784 | 54 | 108 | 45% | 2843 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2527 | 55 | 118 | 40% | 2641 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2873 | 95 | 32 | 50% | 2871 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 64 | 72 | 47% | 2813 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2479 | 60 | 92 | 48% | 2493 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2826 | 53 | 108 | 50% | 2820 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2758 | 51 | 112 | 51% | 2751 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2531 | 53 | 116 | 46% | 2591 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |