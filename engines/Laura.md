# Engine: Laura

Author: Hans Tibberio

Home: https://github.com/HansTibberio/Laura

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0.0 | 2026-05-09 | 1746<sub>(+184) | 1897<sub>(+208) | 1962<sub>(+158) |  |
| 3.0.0 | 2026-04-29 | 1562<sub>(+213) | 1689<sub>(+31) | 1804<sub>(+122) |  |
| 2.0.0 | 2026-04-23 | 1349<sub>(+60) | 1658<sub>(+189) | 1682<sub>(+283) |  |
| 1.1.0 | 2026-01-26 | 1289<sub>(+new) | 1469<sub>(+new) | 1399<sub>(+new) |  |
| 1.0.0 | 2025-05-30 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Laura+<version>&body=###%20Engine%20name%0ALaura%0A%0A###%20Version%0A4.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-07 06:26:25

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1289, 1349, 1562, 1746]
  line "STC (8.0+0.08s)" [1289, 1349, 1562, 1746]
  line "LTC (60.0+0.60s)" [1469, 1658, 1689, 1897]
  line "VLTC (2m24s+1.12s)" [1399, 1682, 1804, 1962]
  line "VLTC (2m24s+1.12s)" [1399, 1682, 1804, 1962]
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
  x-axis ["1.1.0", "2.0.0", "3.0.0", "4.0.0"]
  y-axis "Elo Rating" 1200 --> 2000
  line "STC (8.0+0.08s)" [1289, 1349, 1562, 1746]
  line "STC (8.0+0.08s)" [1289, 1349, 1562, 1746]
  line "LTC (60.0+0.60s)" [1469, 1658, 1689, 1897]
  line "VLTC (2m24s+1.12s)" [1399, 1682, 1804, 1962]
  line "VLTC (2m24s+1.12s)" [1399, 1682, 1804, 1962]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1962 | 49 | 156 | 48% | 1979 | 17% |
| 4.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1897 | 45 | 184 | 50% | 1898 | 15% |
| 4.0.0 | STC <sub>(8.0+0.08s)</sub> | 1746 | 50 | 156 | 54% | 1708 | 14% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1804 | 51 | 152 | 50% | 1783 | 13% |
| 3.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1689 | 53 | 136 | 50% | 1698 | 15% |
| 3.0.0 | STC <sub>(8.0+0.08s)</sub> | 1562 | 54 | 126 | 49% | 1570 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1682 | 56 | 98 | 53% | 1663 | 45% |
| 2.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1658 | 55 | 104 | 48% | 1685 | 39% |
| 2.0.0 | STC <sub>(8.0+0.08s)</sub> | 1349 | 56 | 108 | 55% | 1280 | 37% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1399 | 52 | 132 | 43% | 1574 | 37% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 1469 | 51 | 134 | 43% | 1597 | 34% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1289 | 62 | 134 | 47% | 1335 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |