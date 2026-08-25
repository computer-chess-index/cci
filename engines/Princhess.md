# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2861<sub>(+27) | 3102<sub>(+28) | 3162<sub>(+50) |  |
| 0.21.0 | 2025-10-13 | 2834 | 3074 | 3112 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Princhess+<version>&body=###%20Engine%20name%0APrinchess%0A%0A###%20Version%0A0.22.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-25 06:28:22

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2834, 2861]
  line "STC (8.0+0.08s)" [2834, 2861]
  line "LTC (60.0+0.60s)" [3074, 3102]
  line "VLTC (2m24s+1.12s)" [3112, 3162]
  line "VLTC (2m24s+1.12s)" [3112, 3162]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3162 | 37 | 204 | 50% | 3156 | 56% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3102 | 35 | 234 | 51% | 3093 | 53% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2861 | 36 | 228 | 48% | 2874 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3112 | 24 | 504 | 50% | 3112 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3074 | 23 | 542 | 50% | 3070 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2834 | 21 | 728 | 51% | 2823 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |