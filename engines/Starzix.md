# Engine: Starzix

Author: zzzzz

Home: https://github.com/zzzzz151/Starzix

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.1 | 2025-04-06 | 3322<sub>(+5) | 3484<sub>(+6) | 3505<sub>(-2) |  |
| 6.0 | 2024-10-24 | 3317<sub>(+112) | 3478<sub>(+75) | 3507<sub>(+78) |  |
| 5.0 | 2024-05-23 | 3205 | 3403 | 3429 |  |
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

Generated: 2026-08-18 06:29:54

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["5.0", "6.0", "6.1"]
  y-axis "Elo Rating" 3200 --> 3600
  line "STC (8.0+0.08s)" [3205, 3317, 3322]
  line "STC (8.0+0.08s)" [3205, 3317, 3322]
  line "LTC (60.0+0.60s)" [3403, 3478, 3484]
  line "VLTC (2m24s+1.12s)" [3429, 3507, 3505]
  line "VLTC (2m24s+1.12s)" [3429, 3507, 3505]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3505 | 24 | 414 | 50% | 3506 | 88% |
| 6.1 | LTC <sub>(60.0+0.60s)</sub> | 3484 | 23 | 420 | 50% | 3486 | 87% |
| 6.1 | STC <sub>(8.0+0.08s)</sub> | 3322 | 21 | 582 | 49% | 3326 | 70% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3507 | 12 | 1620 | 50% | 3506 | 85% |
| 6.0 | LTC <sub>(60.0+0.60s)</sub> | 3478 | 12 | 1600 | 50% | 3476 | 82% |
| 6.0 | STC <sub>(8.0+0.08s)</sub> | 3317 | 13 | 1628 | 50% | 3320 | 68% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3429 | 32 | 236 | 51% | 3424 | 76% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3403 | 32 | 240 | 48% | 3414 | 78% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 3205 | 27 | 408 | 53% | 3119 | 56% |
| --- | --- | --- | --- | --- | --- | --- | --- |