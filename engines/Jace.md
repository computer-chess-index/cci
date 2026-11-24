# Engine: Jace

Author: Glen Carbon

Home: https://github.com/jsgroby/jace

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1783<sub>(+31) | 2041<sub>(+5) | 2109<sub>(+30) |  |
| 1.5.1 | 2026-11-05 | 1752<sub>(+52) | 2036<sub>(+66) | 2079<sub>(+20) |  |
| 1.4 | 2026-10-15 | 1700 | 1970 | 2059 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.2 | 2026-11-16 | 1743<sub>(-30) | 1985<sub>(+11) | 2029<sub>(+11) |  |
| 1.5.1 | 2026-11-05 | 1773<sub>(+64) | 1974<sub>(+46) | 2018<sub>(-18) |  |
| 1.4 | 2026-10-15 | 1709 | 1928 | 2036 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4 | 2026-10-15 | 1709 | 1928 | 2036 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Jace+<version>&body=###%20Engine%20name%0AJace%0A%0A###%20Version%0A1.5.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-24 05:39:18

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.4", "1.5.1", "1.5.2"]
  y-axis "Elo Rating" 1700 --> 2200
  line "E1: STC (8.0+0.08s)" [1700, 1752, 1783]
  line "E1: LTC (60.0+0.60s)" [1970, 2036, 2041]
  line "E1: VLTC (2m24s+1.12s)" [2059, 2079, 2109]
  line "P1: STC (8.0+0.08s)" [1709, 1773, 1743]
  line "P1: LTC (60.0+0.60s)" [1928, 1974, 1985]
  line "P1: VLTC (2m24s+1.12s)" [2036, 2018, 2029]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.2 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 2109 | 43 | 192 | 45% | 2175 | 23% |
|  |  | P1 | 2029 | 45 | 176 | 51% | 2021 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1985 | 58 | 96 | 50% | 1989 | 29% |
|  |  | E1 | 2041 | 36 | 286 | 44% | 2145 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1743 | 59 | 96 | 52% | 1720 | 25% |
|  |  | E1 | 1783 | 47 | 164 | 47% | 1810 | 20% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2018 | 40 | 244 | 44% | 2064 | 18% |
|  |  | E1 | 2079 | 33 | 344 | 46% | 2122 | 21% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1974 | 44 | 178 | 48% | 1998 | 24% |
|  |  | E1 | 2036 | 38 | 256 | 51% | 2025 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1773 | 42 | 204 | 52% | 1755 | 20% |
|  |  | E1 | 1752 | 37 | 262 | 50% | 1752 | 18% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.4 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2036 | 60 | 100 | 52% | 2021 | 19% |
|  |  | E1 | 2059 | 44 | 186 | 53% | 2030 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 1928 | 66 | 76 | 47% | 1952 | 26% |
|  |  | E1 | 1970 | 36 | 274 | 53% | 1937 | 24% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 1709 | 53 | 124 | 49% | 1721 | 20% |
|  |  | E1 | 1700 | 49 | 150 | 47% | 1724 | 17% |