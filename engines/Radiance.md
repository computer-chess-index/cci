# Engine: Radiance

Author: Paul-Elie Pipelin

Home: https://github.com/ppipelin/radiance

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2219<sub>(+730) | 2610<sub>(+775) | 2487<sub>(+579) |  |
| 4.4 | 2026-04-23 | 1489 | 1835 | 1908 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.0 | 2026-10-10 | 2229<sub>(+481) | 3119<sub>(+1066) | 2795<sub>(+712) |  |
| 4.4 | 2026-04-23 | 1748 | 2053 | 2083 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-12 04:41:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.4", "5.0"]
  y-axis "Elo Rating" 1400 --> 3200
  line "E1: STC (8.0+0.08s)" [1489, 2219]
  line "E1: LTC (60.0+0.60s)" [1835, 2610]
  line "E1: VLTC (2m24s+1.12s)" [1908, 2487]
  line "P1: STC (8.0+0.08s)" [1748, 2229]
  line "P1: LTC (60.0+0.60s)" [2053, 3119]
  line "P1: VLTC (2m24s+1.12s)" [2083, 2795]
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

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2795 | 221 | 12 | 88% | 2364 | 8% |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2487 | 329 | 8 | 100% | 1908 | 0% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 3119 | 160 | 20 | 83% | 2628 | 25% |
| 5.0 | LTC <sub>(60.0+0.60s)</sub> | 2610 | 100 | 36 | 67% | 2421 | 28% |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2229 | 236 | 8 | 75% | 1966 | 0% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 5.0 | STC <sub>(8.0+0.08s)</sub> | 2219 | 117 | 28 | 64% | 2053 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2207 | 28 | 444 | 50% | 2201 | 21% |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 78 | 64 | 48% | 2147 | 17% |
| 4.4 | VLTC <sub>(2m24s+1.12s)</sub> | 1908 | 47 | 170 | 45% | 1986 | 16% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2067 | 26 | 510 | 50% | 2057 | 22% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 2053 | 53 | 124 | 53% | 2037 | 23% |
| 4.4 | LTC <sub>(60.0+0.60s)</sub> | 1835 | 53 | 130 | 45% | 1932 | 22% |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1709 | 26 | 576 | 48% | 1721 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1748 | 69 | 72 | 52% | 1725 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.4 | STC <sub>(8.0+0.08s)</sub> | 1489 | 48 | 160 | 44% | 1562 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2105 | 30 | 412 | 54% | 2063 | 18% |
| 4.3 | LTC <sub>(60.0+0.60s)</sub> | 1959 | 31 | 362 | 49% | 1968 | 23% |
| 4.3 | STC <sub>(8.0+0.08s)</sub> | 1679 | 32 | 360 | 49% | 1689 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1901 | 36 | 304 | 45% | 1994 | 19% |
| 4.2 | LTC <sub>(60.0+0.60s)</sub> | 1855 | 39 | 246 | 47% | 1910 | 18% |
| 4.2 | STC <sub>(8.0+0.08s)</sub> | 1590 | 34 | 328 | 45% | 1667 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |