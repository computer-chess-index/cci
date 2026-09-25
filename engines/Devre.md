# Engine: Devre

Author: Ömer Faruk Tutkun

Home: https://github.com/OmerFarukTutkun/Devre

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 7.0 | 2026-08-07 | 3384<sub>(+186) | 3529<sub>(+119) | 3556<sub>(+107) |  |
| 6.0 | 2024-08-10 | 3198 | 3410 | 3449 |  |
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

Generated: 2026-09-25 04:37:42

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.0", "7.0"]
  y-axis "Elo Rating" 3100 --> 3600
  line "" [3198, 3384]
  line "STC (8.0+0.08s)" [3198, 3384]
  line "LTC (60.0+0.60s)" [3410, 3529]
  line "" [3449, 3556]
  line "VLTC (2m24s+1.12s)" [3449, 3556]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3556 | 30 | 258 | 51% | 3542 | 84% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 26 | 346 | 51% | 3509 | 81% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3384 | 26 | 378 | 54% | 3336 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3449 | 32 | 244 | 49% | 3453 | 76% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3410 | 30 | 278 | 50% | 3409 | 71% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3198 | 32 | 256 | 49% | 3208 | 61% |
| --- | --- | --- | --- | --- | --- | --- | --- |