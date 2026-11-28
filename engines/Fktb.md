# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1759<sub>(-23) | 2057<sub>(+6) | 2159<sub>(-62) |  |
| 0.0.76 | 2026-01-05 | 1782 | 2051 | 2221 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1818<sub>(+28) | 2070<sub>(-13) | 2161<sub>(-48) |  |
| 0.0.76 | 2026-01-05 | 1790 | 2083 | 2209 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1866<sub>(-54) | 2145<sub>(+3) | 2241<sub>(+23) |  |
| 0.0.76 | 2026-01-05 | 1920 | 2142 | 2218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

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

Generated: 2026-11-28 05:38:38

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1700 --> 2300
  line "E1: STC (8.0+0.08s)" [1782, 1759]
  line "E1: LTC (60.0+0.60s)" [2051, 2057]
  line "E1: VLTC (2m24s+1.12s)" [2221, 2159]
  line "P1: STC (8.0+0.08s)" [1790, 1818]
  line "P1: LTC (60.0+0.60s)" [2083, 2070]
  line "P1: VLTC (2m24s+1.12s)" [2209, 2161]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "T1: STC (8.0+0.08s)" [1920, 1866]
  line "T1: LTC (60.0+0.60s)" [2142, 2145]
  line "T1: VLTC (2m24s+1.12s)" [2218, 2241]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2159 | 29 | 414 | 51% | 2155 | 27% |
|  |  | T1 | 2241 | 24 | 580 | 52% | 2221 | 31% |
|  |  | P1 | 2161 | 39 | 226 | 49% | 2180 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 2057 | 27 | 484 | 51% | 2060 | 28% |
|  |  | T1 | 2145 | 25 | 536 | 49% | 2153 | 29% |
|  |  | P1 | 2070 | 36 | 280 | 42% | 2172 | 27% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1866 | 22 | 740 | 50% | 1856 | 27% |
|  |  | P1 | 1818 | 40 | 220 | 50% | 1828 | 25% |
|  |  | E1 | 1759 | 29 | 408 | 47% | 1787 | 28% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2218 | 52 | 132 | 48% | 2245 | 22% |
|  |  | P1 | 2209 | 68 | 76 | 46% | 2257 | 24% |
|  |  | E1 | 2221 | 49 | 146 | 43% | 2325 | 29% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2142 | 45 | 172 | 49% | 2152 | 23% |
|  |  | P1 | 2083 | 58 | 108 | 47% | 2141 | 32% |
|  |  | E1 | 2051 | 48 | 160 | 50% | 2072 | 26% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1920 | 49 | 140 | 48% | 1939 | 27% |
|  |  | P1 | 1790 | 54 | 126 | 43% | 1890 | 25% |
|  |  | E1 | 1782 | 48 | 154 | 44% | 1841 | 26% |