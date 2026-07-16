# Engine: Zeppelin

Author: Jakub Szczerbinski

Home: https://github.com/jszczerbinsky/zeppelin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.5.0 | 2026-03-27 | 1893<sub>(+110) | 2165<sub>(+116) | 2250<sub>(+48) |  |
| 1.4.2 | 2026-03-22 | 1783<sub>(+12) | 2049<sub>(-62) | 2202<sub>(+41) |  |
| 1.4.1 | 2026-03-15 | 1771<sub>(+5) | 2111<sub>(+109) | 2161<sub>(+5) |  |
| 1.4.0 | 2026-03-14 | 1766<sub>(+153) | 2002<sub>(+98) | 2156<sub>(+178) |  |
| 1.3.0 | 2026-03-05 | 1613<sub>(+59) | 1904<sub>(+130) | 1978<sub>(+56) |  |
| 1.2.0 | 2026-02-09 | 1554<sub>(+66) | 1774<sub>(+99) | 1922<sub>(+120) |  |
| 1.1.0 | 2026-02-03 | 1488<sub>(+323) | 1675<sub>(+116) | 1802<sub>(+186) |  |
| 1.0.0 | 2026-02-01 | 1165<sub>(-31) | 1559<sub>(+148) | 1616<sub>(+109) |  |
| 0.2.0 | 2025-11-16 | 1196<sub>(+new) | 1411<sub>(+new) | 1507<sub>(+new) |  |
| 0.1.1 | 2025-10-12 |  |  |  |  |
| 0.1.0 | 2025-10-11 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zeppelin+<version>&body=###%20Engine%20name%0AZeppelin%0A%0A###%20Version%0A1.5.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-16 06:33:41

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1196, 1165, 1488, 1554, 1613, 1766, 1771, 1783, 1893]
  line "STC (8.0+0.08s)" [1196, 1165, 1488, 1554, 1613, 1766, 1771, 1783, 1893]
  line "LTC (60.0+0.60s)" [1411, 1559, 1675, 1774, 1904, 2002, 2111, 2049, 2165]
  line "VLTC (2m24s+1.12s)" [1507, 1616, 1802, 1922, 1978, 2156, 2161, 2202, 2250]
  line "VLTC (2m24s+1.12s)" [1507, 1616, 1802, 1922, 1978, 2156, 2161, 2202, 2250]
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
  x-axis ["0.2.0", "1.0.0", "1.1.0", "1.2.0", "1.3.0", "1.4.0", "1.4.1", "1.4.2", "1.5.0"]
  y-axis "Elo Rating" 1100 --> 2300
  line "STC (8.0+0.08s)" [1196, 1165, 1488, 1554, 1613, 1766, 1771, 1783, 1893]
  line "STC (8.0+0.08s)" [1196, 1165, 1488, 1554, 1613, 1766, 1771, 1783, 1893]
  line "LTC (60.0+0.60s)" [1411, 1559, 1675, 1774, 1904, 2002, 2111, 2049, 2165]
  line "VLTC (2m24s+1.12s)" [1507, 1616, 1802, 1922, 1978, 2156, 2161, 2202, 2250]
  line "VLTC (2m24s+1.12s)" [1507, 1616, 1802, 1922, 1978, 2156, 2161, 2202, 2250]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2250 | 28 | 446 | 51% | 2240 | 27% |
| 1.5.0 | LTC <sub>(60.0+0.60s)</sub> | 2165 | 27 | 474 | 51% | 2149 | 24% |
| 1.5.0 | STC <sub>(8.0+0.08s)</sub> | 1893 | 27 | 518 | 49% | 1899 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2202 | 36 | 278 | 54% | 2161 | 23% |
| 1.4.2 | LTC <sub>(60.0+0.60s)</sub> | 2049 | 36 | 280 | 45% | 2099 | 21% |
| 1.4.2 | STC <sub>(8.0+0.08s)</sub> | 1783 | 41 | 208 | 52% | 1763 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2161 | 32 | 340 | 50% | 2165 | 22% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2111 | 39 | 230 | 54% | 2078 | 23% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 1771 | 41 | 216 | 53% | 1742 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2156 | 36 | 272 | 48% | 2178 | 24% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2002 | 40 | 218 | 52% | 1986 | 22% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 1766 | 41 | 206 | 51% | 1759 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1978 | 39 | 224 | 50% | 1979 | 22% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 1904 | 39 | 232 | 49% | 1917 | 20% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1613 | 44 | 182 | 49% | 1619 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1922 | 38 | 254 | 46% | 1962 | 17% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1774 | 41 | 216 | 50% | 1771 | 19% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1554 | 43 | 198 | 49% | 1558 | 15% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1802 | 38 | 258 | 55% | 1746 | 17% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1675 | 45 | 178 | 47% | 1706 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1488 | 48 | 160 | 53% | 1458 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1616 | 48 | 162 | 51% | 1602 | 12% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1559 | 46 | 178 | 46% | 1598 | 16% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1165 | 65 | 80 | 47% | 1193 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1507 | 37 | 290 | 42% | 1638 | 19% |
| 0.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1411 | 43 | 218 | 48% | 1447 | 15% |
| 0.2.0 | STC <sub>(8.0+0.08s)</sub> | 1196 | 118 | 30 | 33% | 1399 | 13% |
| --- | --- | --- | --- | --- | --- | --- | --- |