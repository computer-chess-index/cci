# Engine: Hobbes

Author: Dan Kelsey

Home: https://github.com/kelseyde/hobbes-chess-engine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.0 | 2026-07-22 | 3428<sub>(+39) | 3536<sub>(+17) | 3621<sub>(+91) |  |
| 2.1 | 2026-05-26 | 3389<sub>(+new) | 3519<sub>(+new) | 3530<sub>(+new) |  |
| 2.0 | 2026-05-25 |  |  |  |  |
| 1.0 | 2026-03-05 | 3359 | 3492 | 3506 |  |
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

Generated: 2026-07-23 06:25:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.1", "3.0"]
  y-axis "Elo Rating" 3300 --> 3700
  line "STC (8.0+0.08s)" [3359, 3389, 3428]
  line "STC (8.0+0.08s)" [3359, 3389, 3428]
  line "LTC (60.0+0.60s)" [3492, 3519, 3536]
  line "VLTC (2m24s+1.12s)" [3506, 3530, 3621]
  line "VLTC (2m24s+1.12s)" [3506, 3530, 3621]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3621 | 118 | 16 | 59% | 3560 | 81% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 3536 | 83 | 32 | 50% | 3537 | 88% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 3428 | 84 | 32 | 48% | 3437 | 84% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3530 | 31 | 232 | 51% | 3525 | 90% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 3519 | 30 | 260 | 52% | 3506 | 88% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 3389 | 28 | 296 | 52% | 3376 | 80% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 25 | 378 | 51% | 3497 | 90% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3492 | 26 | 350 | 51% | 3480 | 87% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 3359 | 23 | 484 | 53% | 3329 | 73% |
| --- | --- | --- | --- | --- | --- | --- | --- |