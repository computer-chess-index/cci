# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 737<sub>(-126) | 946<sub>(-79) | 1049<sub>(+19) |  |
| 1.3.3 | 2026-03-26 | 863<sub>(+73) | 1025<sub>(-40) | 1030<sub>(-18) |  |
| 1.3.2 | 2025-09-16 | 790 | 1065 | 1048 |  |
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

Generated: 2026-09-24 04:43:48

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "" [790, 863, 737]
  line "STC (8.0+0.08s)" [790, 863, 737]
  line "LTC (60.0+0.60s)" [1065, 1025, 946]
  line "" [1048, 1030, 1049]
  line "VLTC (2m24s+1.12s)" [1048, 1030, 1049]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1049 | 50 | 206 | 54% | 946 | 14% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 946 | 51 | 202 | 54% | 879 | 12% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 737 | 53 | 186 | 45% | 818 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1030 | 62 | 140 | 49% | 991 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1025 | 64 | 136 | 46% | 1013 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 863 | 73 | 116 | 42% | 940 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1048 | 75 | 106 | 44% | 1166 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1065 | 85 | 92 | 42% | 1192 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 790 | 103 | 76 | 37% | 1062 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |