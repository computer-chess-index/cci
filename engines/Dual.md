# Engine: Dual

Author: Tomasz Stawowy

Home: https://github.com/DSTGU/Dual

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.3.2 | 2026-07-06 | 2417<sub>(+new) | 2589<sub>(+new) | 2696<sub>(+new) |  |
| 0.3.1 | 2026-07-05 |  |  |  |  |
| 0.3.0 | 2026-05-23 |  |  |  |  |
| 0.2.9 | 2026-05-19 | 1914<sub>(+225) | 2097<sub>(+239) | 2214<sub>(+290) |  |
| 0.2.8 | 2026-05-15 | 1689<sub>(+100) | 1858<sub>(+33) | 1924<sub>(+70) |  |
| 0.2.7 | 2026-05-11 | 1589<sub>(+new) | 1825<sub>(+new) | 1854<sub>(+new) |  |
| 0.2.6 | 2024-11-29 |  |  |  |  |
| 0.2.5 | 2024-11-26 |  |  |  |  |
| 0.2.4 | 2024-11-24 |  |  |  |  |
| 0.2.3 | 2024-11-22 |  |  |  |  |
| 0.2.2 | 2024-11-22 |  |  |  |  |
| 0.2.1 | 2024-11-20 |  |  |  |  |
| 0.2.0 | 2024-11-19 |  |  |  |  |
| 0.1.0 | 2024-11-19 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Dual+<version>&body=###%20Engine%20name%0ADual%0A%0A###%20Version%0A0.3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-08 06:24:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2"]
  y-axis "Elo Rating" 1500 --> 2700
  line "STC (8.0+0.08s)" [1589, 1689, 1914, 2417]
  line "STC (8.0+0.08s)" [1589, 1689, 1914, 2417]
  line "LTC (60.0+0.60s)" [1825, 1858, 2097, 2589]
  line "VLTC (2m24s+1.12s)" [1854, 1924, 2214, 2696]
  line "VLTC (2m24s+1.12s)" [1854, 1924, 2214, 2696]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.7", "0.2.8", "0.2.9", "0.3.2"]
  y-axis "Elo Rating" 1500 --> 2700
  line "STC (8.0+0.08s)" [1589, 1689, 1914, 2417]
  line "STC (8.0+0.08s)" [1589, 1689, 1914, 2417]
  line "LTC (60.0+0.60s)" [1825, 1858, 2097, 2589]
  line "VLTC (2m24s+1.12s)" [1854, 1924, 2214, 2696]
  line "VLTC (2m24s+1.12s)" [1854, 1924, 2214, 2696]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2696 | 121 | 24 | 67% | 2516 | 33% |
| 0.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2589 | 103 | 32 | 64% | 2445 | 34% |
| 0.3.2 | STC <sub>(8.0+0.08s)</sub> | 2417 | 108 | 32 | 64% | 2250 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.9 | VLTC <sub>(2m24s+1.12s)</sub> | 2214 | 34 | 298 | 51% | 2213 | 23% |
| 0.2.9 | LTC <sub>(60.0+0.60s)</sub> | 2097 | 37 | 258 | 52% | 2079 | 24% |
| 0.2.9 | STC <sub>(8.0+0.08s)</sub> | 1914 | 35 | 288 | 51% | 1908 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.8 | VLTC <sub>(2m24s+1.12s)</sub> | 1924 | 34 | 312 | 48% | 1937 | 21% |
| 0.2.8 | LTC <sub>(60.0+0.60s)</sub> | 1858 | 35 | 276 | 51% | 1839 | 29% |
| 0.2.8 | STC <sub>(8.0+0.08s)</sub> | 1689 | 33 | 314 | 46% | 1719 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.7 | VLTC <sub>(2m24s+1.12s)</sub> | 1854 | 32 | 334 | 47% | 1882 | 25% |
| 0.2.7 | LTC <sub>(60.0+0.60s)</sub> | 1825 | 35 | 304 | 49% | 1841 | 19% |
| 0.2.7 | STC <sub>(8.0+0.08s)</sub> | 1589 | 36 | 292 | 50% | 1585 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |