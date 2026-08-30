# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.1 | 2026-06-10 | 2940<sub>(+33) | 3205<sub>(+38) | 3279<sub>(+20) |  |
| 2.0.0 | 2026-05-11 | 2907<sub>(+102) | 3167<sub>(+88) | 3259<sub>(+81) |  |
| 1.1.0 | 2026-02-28 | 2805<sub>(+353) | 3079<sub>(+361) | 3178<sub>(+323) |  |
| 1.0.4 | 2026-01-16 | 2452<sub>(+129) | 2718<sub>(+38) | 2855<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2323<sub>(+25) | 2680<sub>(+115) | 2754<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2298<sub>(+27) | 2565<sub>(+20) | 2680<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2271<sub>(+37) | 2545<sub>(-13) | 2734<sub>(-52) |  |
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

Generated: 2026-08-30 06:25:30

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0", "2.0.1"]
  y-axis "Elo Rating" 2200 --> 3300
  line "" [2234, 2271, 2298, 2323, 2452, 2805, 2907, 2940]
  line "STC (8.0+0.08s)" [2234, 2271, 2298, 2323, 2452, 2805, 2907, 2940]
  line "LTC (60.0+0.60s)" [2558, 2545, 2565, 2680, 2718, 3079, 3167, 3205]
  line "" [2786, 2734, 2680, 2754, 2855, 3178, 3259, 3279]
  line "VLTC (2m24s+1.12s)" [2786, 2734, 2680, 2754, 2855, 3178, 3259, 3279]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3279 | 26 | 400 | 52% | 3267 | 58% |
| 2.0.1 | LTC <sub>(60.0+0.60s)</sub> | 3205 | 26 | 400 | 51% | 3201 | 60% |
| 2.0.1 | STC <sub>(8.0+0.08s)</sub> | 2940 | 26 | 438 | 52% | 2921 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3259 | 29 | 316 | 51% | 3254 | 61% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 29 | 322 | 48% | 3179 | 54% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2907 | 29 | 352 | 52% | 2886 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 27 | 392 | 53% | 3158 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3079 | 28 | 356 | 51% | 3066 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2805 | 28 | 398 | 51% | 2795 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2855 | 34 | 272 | 49% | 2863 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2718 | 35 | 252 | 50% | 2720 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2452 | 31 | 348 | 55% | 2406 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2754 | 43 | 172 | 50% | 2757 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2680 | 45 | 160 | 51% | 2673 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2323 | 44 | 172 | 51% | 2317 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2680 | 38 | 214 | 50% | 2680 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2565 | 35 | 264 | 46% | 2603 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2298 | 41 | 212 | 55% | 2253 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2734 | 42 | 180 | 52% | 2718 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2545 | 40 | 202 | 53% | 2518 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2271 | 50 | 142 | 48% | 2288 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2786 | 61 | 92 | 42% | 2857 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2558 | 59 | 92 | 46% | 2593 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2234 | 67 | 82 | 59% | 2151 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |