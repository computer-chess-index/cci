# Engine: Tcheran

Author: Jonathan Gilchrist

Home: https://github.com/tcheran-chess/tcheran

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 12.0 | 2026-05-08 | 3283<sub>(+40) | 3429<sub>(+9) | 3467<sub>(+22) |  |
| 11.0 | 2026-02-13 | 3243<sub>(+99) | 3420<sub>(+94) | 3445<sub>(+58) |  |
| 10.0 | 2025-12-28 | 3144<sub>(+119) | 3326<sub>(+129) | 3387<sub>(+139) |  |
| 9.0 | 2025-12-08 | 3025<sub>(+78) | 3197<sub>(+50) | 3248<sub>(+51) |  |
| 8.0 | 2025-11-27 | 2947<sub>(+177) | 3147<sub>(+149) | 3197<sub>(+126) |  |
| 7.0 | 2025-11-07 | 2770<sub>(+new) | 2998<sub>(+new) | 3071<sub>(+new) |  |
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

Generated: 2026-05-19 06:29:43

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0", "9.0", "10.0", "11.0", "12.0"]
  y-axis "Elo Rating" 2700 --> 3500
  line "STC (8.0+0.08s)" [2770, 2947, 3025, 3144, 3243, 3283]
  line "STC (8.0+0.08s)" [2770, 2947, 3025, 3144, 3243, 3283]
  line "LTC (60.0+0.60s)" [2998, 3147, 3197, 3326, 3420, 3429]
  line "VLTC (2m24s+1.12s)" [3071, 3197, 3248, 3387, 3445, 3467]
  line "VLTC (2m24s+1.12s)" [3071, 3197, 3248, 3387, 3445, 3467]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 12.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3467 | 28 | 296 | 50% | 3464 | 85% |
| 12.0 | LTC <sub>(60.0+0.60s)</sub> | 3429 | 28 | 296 | 51% | 3425 | 79% |
| 12.0 | STC <sub>(8.0+0.08s)</sub> | 3283 | 27 | 342 | 52% | 3267 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 11.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3445 | 23 | 434 | 51% | 3443 | 80% |
| 11.0 | LTC <sub>(60.0+0.60s)</sub> | 3420 | 24 | 424 | 51% | 3410 | 79% |
| 11.0 | STC <sub>(8.0+0.08s)</sub> | 3243 | 25 | 448 | 51% | 3240 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 10.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3387 | 27 | 336 | 49% | 3397 | 75% |
| 10.0 | LTC <sub>(60.0+0.60s)</sub> | 3326 | 30 | 268 | 49% | 3336 | 75% |
| 10.0 | STC <sub>(8.0+0.08s)</sub> | 3144 | 31 | 286 | 52% | 3132 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3248 | 38 | 180 | 50% | 3247 | 66% |
| 9.0 | LTC <sub>(60.0+0.60s)</sub> | 3197 | 39 | 168 | 52% | 3182 | 65% |
| 9.0 | STC <sub>(8.0+0.08s)</sub> | 3025 | 37 | 212 | 47% | 3055 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3197 | 44 | 132 | 50% | 3195 | 64% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3147 | 37 | 204 | 57% | 3092 | 58% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 2947 | 42 | 164 | 47% | 2970 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3071 | 51 | 116 | 47% | 3096 | 44% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 2998 | 49 | 130 | 50% | 2979 | 42% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 2770 | 54 | 116 | 56% | 2695 | 36% |
| --- | --- | --- | --- | --- | --- | --- | --- |