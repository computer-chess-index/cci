# Engine: Reckless

Author: Arseniy Surkov

Home: https://github.com/codedeliveryservice/Reckless

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.9.0 | 2026-03-01 | 3480<sub>(+40) | 3571<sub>(+12) | 3592<sub>(+20) |  |
| 0.8.0 | 2025-08-30 | 3440 | 3559 | 3572 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Reckless+<version>&body=###%20Engine%20name%0AReckless%0A%0A###%20Version%0A0.9.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-24 06:28:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.8.0", "0.9.0"]
  y-axis "Elo Rating" 3400 --> 3600
  line "STC (8.0+0.08s)" [3440, 3480]
  line "STC (8.0+0.08s)" [3440, 3480]
  line "LTC (60.0+0.60s)" [3559, 3571]
  line "VLTC (2m24s+1.12s)" [3572, 3592]
  line "VLTC (2m24s+1.12s)" [3572, 3592]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3592 | 32 | 224 | 53% | 3572 | 93% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 3571 | 26 | 332 | 51% | 3565 | 93% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 3480 | 20 | 606 | 50% | 3478 | 82% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.8.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3572 | 27 | 306 | 54% | 3545 | 88% |
| 0.8.0 | LTC <sub>(60.0+0.60s)</sub> | 3559 | 29 | 268 | 51% | 3545 | 87% |
| 0.8.0 | STC <sub>(8.0+0.08s)</sub> | 3440 | 26 | 378 | 51% | 3425 | 74% |
| --- | --- | --- | --- | --- | --- | --- | --- |