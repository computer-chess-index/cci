# Engine: Clarity

Author: Joseph Pasfield

Home: https://github.com/Vast342/Clarity

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 8.0.0 | 2025-07-09 | 3236<sub>(-28) | 3438<sub>(+24) | 3438<sub>(-25) |  |
| 8.0.0 | 2025-07-09 | 3264 | 3414 | 3463 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Clarity+<version>&body=###%20Engine%20name%0AClarity%0A%0A###%20Version%0A8.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:24:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["8.0.0", "8.0.0"]
  y-axis "Elo Rating" 3200 --> 3500
  line "STC (8.0+0.08s)" [3236, 3264]
  line "STC (8.0+0.08s)" [3236, 3264]
  line "LTC (60.0+0.60s)" [3438, 3414]
  line "VLTC (2m24s+1.12s)" [3438, 3463]
  line "VLTC (2m24s+1.12s)" [3438, 3463]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3438 | 85 | 32 | 48% | 3451 | 78% |
| 8.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3463 | 25 | 388 | 51% | 3455 | 80% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3438 | 93 | 28 | 50% | 3440 | 71% |
| 8.0.0 | LTC <sub>(60.0+0.60s)</sub> | 3414 | 25 | 372 | 51% | 3410 | 79% |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3264 | 26 | 380 | 50% | 3266 | 67% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 8.0.0 | STC <sub>(8.0+0.08s)</sub> | 3236 | 113 | 20 | 45% | 3271 | 60% |
| --- | --- | --- | --- | --- | --- | --- | --- |