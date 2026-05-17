# Engine: Grail

Author: Jorgen Hanssen

Home: https://github.com/jorgenhanssen/grail

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-11 | 2951<sub>(+92) | 3225<sub>(+93) | 3312<sub>(+83) |  |
| 1.1.0 | 2026-02-28 | 2859<sub>(+352) | 3132<sub>(+360) | 3229<sub>(+320) |  |
| 1.0.4 | 2026-01-16 | 2507<sub>(+130) | 2772<sub>(+38) | 2909<sub>(+101) |  |
| 1.0.3 | 2026-01-04 | 2377<sub>(+25) | 2734<sub>(+114) | 2808<sub>(+74) |  |
| 1.0.2 | 2025-12-16 | 2352<sub>(+30) | 2620<sub>(+20) | 2734<sub>(-54) |  |
| 1.0.1 | 2025-12-10 | 2322<sub>(+39) | 2600<sub>(-14) | 2788<sub>(-51) |  |
| 1.0.0 | 2025-12-05 | 2283 | 2614 | 2839 |  |
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

Generated: 2026-05-17 06:24:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.0.2", "1.0.3", "1.0.4", "1.1.0", "2.0.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2283, 2322, 2352, 2377, 2507, 2859, 2951]
  line "STC (8.0+0.08s)" [2283, 2322, 2352, 2377, 2507, 2859, 2951]
  line "LTC (60.0+0.60s)" [2614, 2600, 2620, 2734, 2772, 3132, 3225]
  line "VLTC (2m24s+1.12s)" [2839, 2788, 2734, 2808, 2909, 3229, 3312]
  line "VLTC (2m24s+1.12s)" [2839, 2788, 2734, 2808, 2909, 3229, 3312]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3312 | 33 | 248 | 51% | 3305 | 62% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3225 | 31 | 286 | 49% | 3233 | 51% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 2951 | 32 | 304 | 52% | 2934 | 41% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 27 | 392 | 53% | 3209 | 53% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 3132 | 28 | 356 | 51% | 3119 | 53% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 2859 | 28 | 398 | 51% | 2849 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2909 | 34 | 272 | 49% | 2917 | 39% |
| 1.0.4 | LTC <sub>(60.0+0.60s)</sub> | 2772 | 35 | 252 | 50% | 2774 | 35% |
| 1.0.4 | STC <sub>(8.0+0.08s)</sub> | 2507 | 31 | 348 | 55% | 2462 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2808 | 43 | 172 | 50% | 2811 | 31% |
| 1.0.3 | LTC <sub>(60.0+0.60s)</sub> | 2734 | 45 | 160 | 51% | 2728 | 33% |
| 1.0.3 | STC <sub>(8.0+0.08s)</sub> | 2377 | 44 | 172 | 51% | 2372 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2734 | 38 | 214 | 50% | 2735 | 35% |
| 1.0.2 | LTC <sub>(60.0+0.60s)</sub> | 2620 | 35 | 264 | 46% | 2658 | 33% |
| 1.0.2 | STC <sub>(8.0+0.08s)</sub> | 2352 | 41 | 212 | 55% | 2307 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2788 | 42 | 180 | 52% | 2772 | 34% |
| 1.0.1 | LTC <sub>(60.0+0.60s)</sub> | 2600 | 40 | 202 | 53% | 2573 | 30% |
| 1.0.1 | STC <sub>(8.0+0.08s)</sub> | 2322 | 50 | 142 | 48% | 2341 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2839 | 61 | 92 | 42% | 2909 | 28% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 2614 | 59 | 92 | 46% | 2649 | 34% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 2283 | 67 | 82 | 59% | 2198 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |