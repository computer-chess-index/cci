# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 876<sub>(+84) | 1085<sub>(-1946) | 1129<sub>(-114) |  |
| 1.3.3 | 2026-03-26 | 792 | 3031 | 1243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 737<sub>(-1037) | 930<sub>(-419) | 1044<sub>(-599) |  |
| 1.3.3 | 2026-03-26 | 1774 | 1349 | 1643 |  |
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

Generated: 2026-11-13 05:44:29

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 3100
  line "E1: STC (8.0+0.08s)" [792, 876]
  line "E1: LTC (60.0+0.60s)" [3031, 1085]
  line "E1: VLTC (2m24s+1.12s)" [1243, 1129]
  line "P1: STC (8.0+0.08s)" [1774, 737]
  line "P1: LTC (60.0+0.60s)" [1349, 930]
  line "P1: VLTC (2m24s+1.12s)" [1643, 1044]
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
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 1044 | 57 | 124 | 41% | 1180 | 22% |
|  |  | E1 | 1129 | 50 | 180 | 42% | 1262 | 12% |
|  |  | T1 | 1050 | 50 | 206 | 54% | 949 | 14% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 930 | 66 | 102 | 36% | 1246 | 17% |
|  |  | E1 | 1085 | 54 | 130 | 48% | 1107 | 25% |
|  |  | T1 | 948 | 51 | 202 | 54% | 880 | 12% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 876 | 55 | 160 | 47% | 1018 | 12% |
|  |  | T1 | 738 | 53 | 186 | 45% | 819 | 11% |
|  |  | P1 | 737 | 64 | 118 | 34% | 1206 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1031 | 62 | 140 | 49% | 992 | 13% |
|  |  | P1 | 1643 | 235 | 20 | 0% | 2353 | 0% |
|  |  | E1 | 1243 | 213 | 16 | 6% | 1870 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1026 | 64 | 136 | 46% | 1014 | 12% |
|  |  | P1 | 1349 | 295 | 16 | 0% | 2292 | 0% |
|  |  | E1 | 3031 | 320 | 4 | 0% | 3436 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 864 | 73 | 116 | 42% | 941 | 10% |
|  |  | P1 | 1774 | 263 | 16 | 0% | 2604 | 0% |
|  |  | E1 | 792 | 308 | 24 | 0% | 1912 | 0% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1049 | 75 | 106 | 44% | 1168 | 13% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1067 | 85 | 92 | 42% | 1193 | 12% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 791 | 103 | 76 | 37% | 1064 | 11% |