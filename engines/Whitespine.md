# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 702<sub>(-153) | 887<sub>(-128) | 1021<sub>(+2) |  |
| 1.3.3 | 2026-03-26 | 855<sub>(+73) | 1015<sub>(-39) | 1019<sub>(-18) |  |
| 1.3.2 | 2025-09-16 | 782 | 1054 | 1037 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-16 06:33:12

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "STC (8.0+0.08s)" [782, 855, 702]
  line "STC (8.0+0.08s)" [782, 855, 702]
  line "LTC (60.0+0.60s)" [1054, 1015, 887]
  line "VLTC (2m24s+1.12s)" [1037, 1019, 1021]
  line "VLTC (2m24s+1.12s)" [1037, 1019, 1021]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1021 | 58 | 162 | 52% | 936 | 14% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 887 | 60 | 154 | 49% | 887 | 10% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 702 | 58 | 154 | 43% | 819 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1019 | 61 | 140 | 49% | 981 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1015 | 64 | 136 | 46% | 1003 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 855 | 72 | 116 | 42% | 933 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1037 | 75 | 106 | 44% | 1157 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1054 | 85 | 92 | 42% | 1183 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 782 | 102 | 76 | 37% | 1053 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |