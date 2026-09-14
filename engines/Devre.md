# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3380<sub>(+185) | 3525<sub>(+116) | 3552<sub>(+109) |  |
| 6.0 | 2024-08-10 | 3195 | 3409 | 3443 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Devre+<version>&body=###%20Engine%20name%0ADevre%0A%0A###%20Version%0A7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-14 04:37:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3195, 3380]
  line "STC (8.0+0.08s)" [3195, 3380]
  line "LTC (60.0+0.60s)" [3409, 3525]
  line "" [3443, 3552]
  line "VLTC (2m24s+1.12s)" [3443, 3552]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3552 | 30 | 258 | 51% | 3540 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3525 | 26 | 346 | 51% | 3505 | 81% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3380 | 26 | 378 | 54% | 3332 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3443 | 32 | 236 | 49% | 3448 | 75% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3409 | 31 | 254 | 51% | 3403 | 70% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3195 | 33 | 252 | 49% | 3205 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |