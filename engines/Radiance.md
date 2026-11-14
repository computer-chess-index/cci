# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2271<sub>(+679) | 2753<sub>(+832) | 2861<sub>(+878) |  |
| 4.4 | 2026-04-23 | 1592 | 1921 | 1983 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2318<sub>(+672) | 2732<sub>(+792) | 2832<sub>(+865) |  |
| 4.4 | 2026-04-23 | 1646 | 1940 | 1967 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.4 | 2026-04-23 | 1709<sub>(+30) | 2067<sub>(+108) | 2207<sub>(+102) |  |
| 4.3 | 2026-03-25 | 1679<sub>(+89) | 1959<sub>(+104) | 2105<sub>(+204) |  |
| 4.2 | 2026-01-17 | 1590 | 1855 | 1901 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Radiance+<version>&body=###%20Engine%20name%0ARadiance%0A%0A###%20Version%0A4.4" target="_blank">Submit new version</a>

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

Generated: 2026-11-14 05:41:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.4", "5.0"]
  y-axis "Elo Rating" 1500 --> 2900
  line "E1: STC (8.0+0.08s)" [1592, 2271]
  line "E1: LTC (60.0+0.60s)" [1921, 2753]
  line "E1: VLTC (2m24s+1.12s)" [1983, 2861]
  line "P1: STC (8.0+0.08s)" [1646, 2318]
  line "P1: LTC (60.0+0.60s)" [1940, 2732]
  line "P1: VLTC (2m24s+1.12s)" [1967, 2832]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.2", "4.3", "4.4"]
  y-axis "Elo Rating" 1500 --> 2300
  line "T1: STC (8.0+0.08s)" [1590, 1679, 1709]
  line "T1: LTC (60.0+0.60s)" [1855, 1959, 2067]
  line "T1: VLTC (2m24s+1.12s)" [1901, 2105, 2207]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 2832 | 37 | 234 | 56% | 2768 | 38% |
|  |  | E1 | 2861 | 35 | 256 | 53% | 2824 | 36% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 2732 | 40 | 210 | 47% | 2743 | 32% |
|  |  | E1 | 2753 | 33 | 302 | 50% | 2743 | 36% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2318 | 50 | 144 | 53% | 2275 | 22% |
|  |  | E1 | 2271 | 40 | 222 | 53% | 2201 | 25% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2207 | 28 | 444 | 50% | 2201 | 21% |
|  |  | P1 | 1967 | 76 | 68 | 48% | 2021 | 16% |
|  |  | E1 | 1983 | 46 | 178 | 46% | 2049 | 17% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 2067 | 26 | 510 | 50% | 2057 | 22% |
|  |  | P1 | 1940 | 53 | 126 | 53% | 1928 | 23% |
|  |  | E1 | 1921 | 52 | 140 | 46% | 2002 | 20% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1709 | 26 | 576 | 48% | 1721 | 19% |
|  |  | P1 | 1646 | 65 | 84 | 52% | 1600 | 21% |
|  |  | E1 | 1592 | 48 | 168 | 43% | 1673 | 17% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 2105 | 30 | 412 | 54% | 2063 | 18% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1959 | 31 | 362 | 49% | 1968 | 23% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1679 | 32 | 360 | 49% | 1689 | 22% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 1901 | 36 | 304 | 45% | 1994 | 19% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 1855 | 39 | 246 | 47% | 1910 | 18% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 1590 | 34 | 328 | 45% | 1667 | 17% |