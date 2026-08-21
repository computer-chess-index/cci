# Engine: Princhess

Author: Lana Samson

Home: https://github.com/princesslana/princhess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.22.0 | 2026-08-16 | 2874<sub>(+43) | 3093<sub>(+22) | 3155<sub>(+46) |  |
| 0.21.0 | 2025-10-13 | 2831 | 3071 | 3109 |  |
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

Generated: 2026-08-21 06:29:05

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.21.0", "0.22.0"]
  y-axis "Elo Rating" 2800 --> 3200
  line "STC (8.0+0.08s)" [2831, 2874]
  line "STC (8.0+0.08s)" [2831, 2874]
  line "LTC (60.0+0.60s)" [3071, 3093]
  line "VLTC (2m24s+1.12s)" [3109, 3155]
  line "VLTC (2m24s+1.12s)" [3109, 3155]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.22.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3155 | 37 | 194 | 50% | 3154 | 58% |
| 0.22.0 | LTC <sub>(60.0+0.60s)</sub> | 3093 | 40 | 170 | 51% | 3089 | 56% |
| 0.22.0 | STC <sub>(8.0+0.08s)</sub> | 2874 | 41 | 184 | 51% | 2871 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.21.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3109 | 24 | 504 | 50% | 3110 | 51% |
| 0.21.0 | LTC <sub>(60.0+0.60s)</sub> | 3071 | 23 | 542 | 50% | 3067 | 50% |
| 0.21.0 | STC <sub>(8.0+0.08s)</sub> | 2831 | 21 | 728 | 51% | 2820 | 38% |
| --- | --- | --- | --- | --- | --- | --- | --- |