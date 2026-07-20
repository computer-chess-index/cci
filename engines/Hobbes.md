# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-05-26 | 3384<sub>(+new) | 3518<sub>(+new) | 3533<sub>(+new) |  |
| 2.0 | 2026-05-25 |  |  |  |  |
| 1.0 | 2026-03-05 | 3357 | 3491 | 3505 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Hobbes+<version>&body=###%20Engine%20name%0AHobbes%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-20 06:25:37

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1"]
  y-axis "Elo Rating" 3300 --> 3600
  line "STC (8.0+0.08s)" [3357, 3384]
  line "STC (8.0+0.08s)" [3357, 3384]
  line "LTC (60.0+0.60s)" [3491, 3518]
  line "VLTC (2m24s+1.12s)" [3505, 3533]
  line "VLTC (2m24s+1.12s)" [3505, 3533]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3533 | 33 | 212 | 51% | 3524 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3518 | 31 | 236 | 52% | 3502 | 89% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3384 | 31 | 252 | 52% | 3371 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 25 | 378 | 51% | 3495 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3491 | 26 | 350 | 51% | 3479 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3357 | 23 | 484 | 53% | 3328 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |