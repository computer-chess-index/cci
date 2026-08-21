# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3325<sub>(+5) | 3487<sub>(+7) | 3506<sub>(-3) |  |
| 6.0 | 2024-10-24 | 3320<sub>(+112) | 3480<sub>(+75) | 3509<sub>(+79) |  |
| 5.0 | 2024-05-23 | 3208 | 3405 | 3430 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Starzix+<version>&body=###%20Engine%20name%0AStarzix%0A%0A###%20Version%0A6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:31:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3208, 3320, 3325]
  line "STC (8.0+0.08s)" [3208, 3320, 3325]
  line "LTC (60.0+0.60s)" [3405, 3480, 3487]
  line "VLTC (2m24s+1.12s)" [3430, 3509, 3506]
  line "VLTC (2m24s+1.12s)" [3430, 3509, 3506]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3506 | 24 | 414 | 50% | 3509 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3487 | 23 | 420 | 50% | 3487 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3325 | 21 | 582 | 49% | 3329 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3509 | 12 | 1620 | 50% | 3509 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3480 | 12 | 1600 | 50% | 3479 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3320 | 13 | 1628 | 50% | 3322 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3430 | 32 | 236 | 51% | 3425 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3405 | 32 | 240 | 48% | 3417 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3208 | 27 | 408 | 53% | 3121 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |