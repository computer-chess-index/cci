# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1689<sub>(+19) | 1912<sub>(+60) | 2012<sub>(+37) |  |
| 0.6.0 | 2025-11-11 | 1670<sub>(+new) | 1852<sub>(+new) | 1975<sub>(+new) |  |
| 0.5.1 | 2025-11-04 |  |  |  | no public available .exe |
| 0.5.0 | 2025-11-03 | 1571<sub>(+new) | 1785<sub>(+new) | 1882<sub>(+new) |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-14 06:23:32

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1571, 1670, 1689]
  line "STC (8.0+0.08s)" [1571, 1670, 1689]
  line "LTC (60.0+0.60s)" [1785, 1852, 1912]
  line "VLTC (2m24s+1.12s)" [1882, 1975, 2012]
  line "VLTC (2m24s+1.12s)" [1882, 1975, 2012]
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
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1571, 1670, 1689]
  line "STC (8.0+0.08s)" [1571, 1670, 1689]
  line "LTC (60.0+0.60s)" [1785, 1852, 1912]
  line "VLTC (2m24s+1.12s)" [1882, 1975, 2012]
  line "VLTC (2m24s+1.12s)" [1882, 1975, 2012]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2012 | 25 | 554 | 48% | 2028 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1912 | 25 | 578 | 49% | 1920 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1689 | 24 | 634 | 50% | 1683 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1975 | 44 | 184 | 49% | 1983 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1852 | 50 | 146 | 50% | 1855 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1670 | 54 | 124 | 50% | 1669 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1882 | 49 | 148 | 49% | 1891 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1785 | 46 | 176 | 47% | 1818 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1571 | 49 | 156 | 47% | 1600 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |