# Engine: Prune

Author: Thomas Girolami

Home: https://github.com/tgirolami09/Prune

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.1 | 2026-07-07 | 3254<sub>(+new) | 3447<sub>(+new) | 3509<sub>(+new) |  |
| 4.0.0 | 2026-06-27 |  |  |  |  |
| 3.2.1 | 2026-02-24 | 3097<sub>(+new) | 3326<sub>(+new) | 3386<sub>(+new) |  |
| 3.2.0 | 2026-02-22 |  |  |  | Skipped for 3.2.1 |
| 3.1.0 | 2026-01-10 | 2908<sub>(+267) | 3164<sub>(+267) | 3209<sub>(+201) |  |
| 3.0.0 | 2025-12-06 | 2641<sub>(-46) | 2897<sub>(-11) | 3008<sub>(-15) |  |
| 2.2.0 | 2025-11-20 | 2687<sub>(+161) | 2908<sub>(+126) | 3023<sub>(+152) |  |
| 2.1.2 | 2025-11-06 | 2526<sub>(+47) | 2782<sub>(-6) | 2871<sub>(0) |  |
| 2.1.1 | 2025-11-05 | 2479<sub>(-51) | 2788<sub>(+30) | 2871<sub>(+47) |  |
| 2.1.0 | 2025-11-02 | 2530 | 2758 | 2824 |  |
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

Generated: 2026-09-06 06:27:15

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1.0", "2.1.1", "2.1.2", "2.2.0", "3.0.0", "3.1.0", "3.2.1", "4.0.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "" [2530, 2479, 2526, 2687, 2641, 2908, 3097, 3254]
  line "STC (8.0+0.08s)" [2530, 2479, 2526, 2687, 2641, 2908, 3097, 3254]
  line "LTC (60.0+0.60s)" [2758, 2788, 2782, 2908, 2897, 3164, 3326, 3447]
  line "" [2824, 2871, 2871, 3023, 3008, 3209, 3386, 3509]
  line "VLTC (2m24s+1.12s)" [2824, 2871, 2871, 3023, 3008, 3209, 3386, 3509]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 25 | 368 | 50% | 3509 | 85% |
| 4.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3447 | 25 | 398 | 51% | 3440 | 74% |
| 4.0.1 | STC <sub>(8.0+0.08s)</sub> | 3254 | 29 | 320 | 51% | 3248 | 65% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3386 | 24 | 410 | 50% | 3383 | 75% |
| 3.2.1 | LTC <sub>(60.0+0.60s)</sub> | 3326 | 25 | 398 | 52% | 3313 | 70% |
| 3.2.1 | STC <sub>(8.0+0.08s)</sub> | 3097 | 24 | 482 | 51% | 3079 | 62% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3209 | 32 | 284 | 51% | 3204 | 50% |
| 3.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3164 | 31 | 288 | 52% | 3152 | 53% |
| 3.1.0 | STC <sub>(8.0+0.08s)</sub> | 2908 | 33 | 276 | 51% | 2889 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3008 | 35 | 236 | 48% | 3024 | 46% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2897 | 36 | 236 | 52% | 2884 | 42% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 2641 | 39 | 212 | 47% | 2669 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3023 | 72 | 56 | 57% | 2969 | 46% |
| 2.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2908 | 66 | 72 | 49% | 2924 | 36% |
| 2.2.0 | STC <sub>(8.0+0.08s)</sub> | 2687 | 90 | 40 | 55% | 2643 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 54 | 108 | 49% | 2885 | 37% |
| 2.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2782 | 54 | 108 | 45% | 2843 | 43% |
| 2.1.2 | STC <sub>(8.0+0.08s)</sub> | 2526 | 55 | 118 | 40% | 2641 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2871 | 95 | 32 | 50% | 2870 | 44% |
| 2.1.1 | LTC <sub>(60.0+0.60s)</sub> | 2788 | 64 | 72 | 47% | 2813 | 44% |
| 2.1.1 | STC <sub>(8.0+0.08s)</sub> | 2479 | 60 | 92 | 48% | 2493 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2824 | 53 | 108 | 50% | 2820 | 42% |
| 2.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2758 | 51 | 112 | 51% | 2750 | 45% |
| 2.1.0 | STC <sub>(8.0+0.08s)</sub> | 2530 | 53 | 116 | 46% | 2589 | 34% |
| --- | --- | --- | --- | --- | --- | --- | --- |