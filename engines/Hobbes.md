# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3416<sub>(+17) | 3545<sub>(+16) | 3573<sub>(+32) |  |
| 2.1 | 2026-05-26 | 3399<sub>(+29) | 3529<sub>(+27) | 3541<sub>(+24) |  |
| 1.0 | 2026-03-05 | 3370 | 3502 | 3517 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Hobbes+<version>&body=###%20Engine%20name%0AHobbes%0A%0A###%20Version%0A3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-23 06:25:27

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3370, 3399, 3416]
  line "STC (8.0+0.08s)" [3370, 3399, 3416]
  line "LTC (60.0+0.60s)" [3502, 3529, 3545]
  line "VLTC (2m24s+1.12s)" [3517, 3541, 3573]
  line "VLTC (2m24s+1.12s)" [3517, 3541, 3573]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3573 | 31 | 240 | 51% | 3567 | 89% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3545 | 29 | 270 | 50% | 3546 | 89% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3416 | 29 | 294 | 49% | 3418 | 75% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3541 | 31 | 232 | 51% | 3534 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 30 | 260 | 52% | 3515 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3399 | 28 | 296 | 52% | 3386 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3517 | 25 | 378 | 51% | 3507 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3502 | 26 | 350 | 51% | 3491 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3370 | 23 | 484 | 53% | 3339 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |