# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 732<sub>(-127) | 927<sub>(-95) | 1052<sub>(+26) |  |
| 1.3.3 | 2026-03-26 | 859<sub>(+73) | 1022<sub>(-40) | 1026<sub>(-18) |  |
| 1.3.2 | 2025-09-16 | 786 | 1062 | 1044 |  |
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

Generated: 2026-09-09 04:44:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "" [786, 859, 732]
  line "STC (8.0+0.08s)" [786, 859, 732]
  line "LTC (60.0+0.60s)" [1062, 1022, 927]
  line "" [1044, 1026, 1052]
  line "VLTC (2m24s+1.12s)" [1044, 1026, 1052]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1052 | 51 | 198 | 56% | 933 | 14% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 927 | 52 | 194 | 54% | 864 | 12% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 732 | 53 | 182 | 45% | 809 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1026 | 62 | 140 | 49% | 987 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1022 | 64 | 136 | 46% | 1008 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 859 | 73 | 116 | 42% | 937 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1044 | 75 | 106 | 44% | 1164 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1062 | 85 | 92 | 42% | 1189 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 786 | 103 | 76 | 37% | 1060 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |