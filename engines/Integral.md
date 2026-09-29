# Engine: Integral

Author: Aron Petkovski

Home: https://github.com/aronpetko/integral

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0 | 2026-09-11 | 3474<sub>(+96) | 3591<sub>(+62) | 3576<sub>(+25) |  |
| 7.0 | 2025-02-14 | 3378 | 3529 | 3551 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Integral+<version>&body=###%20Engine%20name%0AIntegral%0A%0A###%20Version%0A8.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-29 04:39:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["7.0", "8.0"]
  y-axis "Elo Rating" 3300 --> 3600
  line "" [3378, 3474]
  line "STC (8.0+0.08s)" [3378, 3474]
  line "LTC (60.0+0.60s)" [3529, 3591]
  line "" [3551, 3576]
  line "VLTC (2m24s+1.12s)" [3551, 3576]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3576 | 34 | 190 | 51% | 3572 | 95% |
| 8.0 | LTC <sub>(60.0+0.60s)</sub> | 3591 | 39 | 148 | 51% | 3582 | 91% |
| 8.0 | STC <sub>(8.0+0.08s)</sub> | 3474 | 27 | 316 | 52% | 3461 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3551 | 15 | 1010 | 50% | 3551 | 87% |
| 7.0 | LTC <sub>(60.0+0.60s)</sub> | 3529 | 15 | 1012 | 50% | 3529 | 85% |
| 7.0 | STC <sub>(8.0+0.08s)</sub> | 3378 | 15 | 1158 | 50% | 3376 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |