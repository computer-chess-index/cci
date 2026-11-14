# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 878<sub>(+87) | 1088<sub>(-1071) | 1131<sub>(-107) |  |
| 1.3.3 | 2026-03-26 | 791 | 2159 | 1238 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 741<sub>(-546) | 934<sub>(-27) | 1050<sub>(-133) |  |
| 1.3.3 | 2026-03-26 | 1287 | 961 | 1183 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 738<sub>(-126) | 948<sub>(-78) | 1050<sub>(+19) |  |
| 1.3.3 | 2026-03-26 | 864<sub>(+73) | 1026<sub>(-41) | 1031<sub>(-18) |  |
| 1.3.2 | 2025-09-16 | 791 | 1067 | 1049 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-14 05:44:00

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 2200
  line "E1: STC (8.0+0.08s)" [791, 878]
  line "E1: LTC (60.0+0.60s)" [2159, 1088]
  line "E1: VLTC (2m24s+1.12s)" [1238, 1131]
  line "P1: STC (8.0+0.08s)" [1287, 741]
  line "P1: LTC (60.0+0.60s)" [961, 934]
  line "P1: VLTC (2m24s+1.12s)" [1183, 1050]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "T1: STC (8.0+0.08s)" [791, 864, 738]
  line "T1: LTC (60.0+0.60s)" [1067, 1026, 948]
  line "T1: VLTC (2m24s+1.12s)" [1049, 1031, 1050]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1050 | 50 | 206 | 54% | 949 | 14% |
|  |  | P1 | 1050 | 57 | 124 | 41% | 1185 | 22% |
|  |  | E1 | 1131 | 50 | 180 | 42% | 1264 | 12% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 948 | 51 | 202 | 54% | 880 | 12% |
|  |  | P1 | 934 | 66 | 102 | 36% | 1247 | 17% |
|  |  | E1 | 1088 | 54 | 130 | 48% | 1110 | 25% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 741 | 64 | 118 | 34% | 1206 | 17% |
|  |  | E1 | 878 | 55 | 160 | 47% | 1021 | 12% |
|  |  | T1 | 738 | 53 | 186 | 45% | 819 | 11% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 1238 | 213 | 16 | 6% | 1844 | 13% |
|  |  | T1 | 1031 | 62 | 140 | 49% | 992 | 13% |
|  |  | P1 | 1183 | 271 | 24 | 0% | 2223 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2159 | 311 | 16 | 0% | 3058 | 0% |
|  |  | T1 | 1026 | 64 | 136 | 46% | 1014 | 12% |
|  |  | P1 | 961 | 308 | 20 | 0% | 2152 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 864 | 73 | 116 | 42% | 941 | 10% |
|  |  | P1 | 1287 | 297 | 22 | 0% | 2515 | 0% |
|  |  | E1 | 791 | 314 | 24 | 0% | 1932 | 0% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1049 | 75 | 106 | 44% | 1168 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1067 | 85 | 92 | 42% | 1193 | 12% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 791 | 103 | 76 | 37% | 1064 | 11% |