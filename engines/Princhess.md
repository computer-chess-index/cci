# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2869<sub>(+39) | 3092<sub>(+22) | 3154<sub>(+46) |  |
| 0.21.0 | 2025-10-13 | 2830 | 3070 | 3108 |  |
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

Generated: 2026-08-18 06:28:04

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2830, 2869]
  line "STC (8.0+0.08s)" [2830, 2869]
  line "LTC (60.0+0.60s)" [3070, 3092]
  line "VLTC (2m24s+1.12s)" [3108, 3154]
  line "VLTC (2m24s+1.12s)" [3108, 3154]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3154 | 38 | 184 | 50% | 3152 | 59% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3092 | 41 | 160 | 50% | 3087 | 56% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2869 | 43 | 164 | 50% | 2870 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3108 | 24 | 504 | 50% | 3108 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3070 | 23 | 542 | 50% | 3066 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2830 | 21 | 728 | 51% | 2819 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |