# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3267<sub>(+43) | 3411<sub>(+10) | 3447<sub>(+21) |  |
| 11.0 | 2026-02-13 | 3224<sub>(+99) | 3401<sub>(+93) | 3426<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3125<sub>(+119) | 3308<sub>(+130) | 3368<sub>(+139) |  |
| 9.0 | 2025-12-08 | 3006<sub>(+78) | 3178<sub>(+50) | 3229<sub>(+51) |  |
| 8.0 | 2025-11-27 | 2928<sub>(+175) | 3128<sub>(+149) | 3178<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2753<sub>(+new) | 2979<sub>(+new) | 3052<sub>(+new) |  |
| 6.0 | 2025-10-21 |  |  |  |  |
| 5.1 | 2025-01-01 |  |  |  |  |
| 5.0 | 2024-12-05 |  |  |  |  |
| 4.1 | 2024-11-24 |  |  |  |  |
| 4.0 | 2024-10-18 |  |  |  |  |
| 3.0 | 2024-09-09 |  |  |  |  |
| 2.5 | 2024-07-25 |  |  |  |  |
| 2.4 | 2024-07-08 |  |  |  |  |
| 2.3 | 2024-05-09 |  |  |  |  |
| 2.2 | 2024-04-09 |  |  |  |  |
| 2.1 | 2024-01-25 |  |  |  |  |
| 2.0 | 2024-01-18 |  |  |  |  |
| 1.1 | 2024-01-08 |  |  |  |  |
| 1.0 | 2023-12-07 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Tcheran+<version>&body=###%20Engine%20name%0ATcheran%0A%0A###%20Version%0A12.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:28:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "STC (8.0+0.08s)" [2753, 2928, 3006, 3125, 3224, 3267]
  line "STC (8.0+0.08s)" [2753, 2928, 3006, 3125, 3224, 3267]
  line "LTC (60.0+0.60s)" [2979, 3128, 3178, 3308, 3401, 3411]
  line "VLTC (2m24s+1.12s)" [3052, 3178, 3229, 3368, 3426, 3447]
  line "VLTC (2m24s+1.12s)" [3052, 3178, 3229, 3368, 3426, 3447]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3447 | 27 | 320 | 50% | 3448 | 84% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3411 | 27 | 332 | 51% | 3406 | 81% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3267 | 26 | 378 | 52% | 3254 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3426 | 23 | 434 | 51% | 3422 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3401 | 24 | 424 | 51% | 3391 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3224 | 25 | 448 | 51% | 3221 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 27 | 336 | 49% | 3376 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3308 | 30 | 268 | 49% | 3317 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3125 | 31 | 286 | 52% | 3112 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3229 | 38 | 180 | 50% | 3228 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3178 | 39 | 168 | 52% | 3163 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3006 | 37 | 212 | 47% | 3036 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3178 | 44 | 132 | 50% | 3177 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3128 | 37 | 204 | 57% | 3071 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2928 | 42 | 164 | 47% | 2951 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3052 | 51 | 116 | 47% | 3077 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2979 | 49 | 130 | 50% | 2961 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2753 | 54 | 116 | 56% | 2676 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |