# Engine: ChessCore

Author: Adam Berent

Home: https://github.com/3583Bytes/ChessCore

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-06-24 | 1420<sub>(+730) | 1820<sub>(+776) | 1879<sub>(+811) |  |
| 1.1.5 | 2026-05-25 | 690<sub>(+14) | 1044<sub>(+401) | 1068<sub>(+388) |  |
| 1.1.4 | 2026-05-21 | 676<sub>(+28) | 643<sub>(-338) | 680<sub>(-300) |  |
| 1.1.2 | 2026-05-19 | 648<sub>(-30) | 981<sub>(+6) | 980<sub>(-139) |  |
| 1.1.1 | 2026-05-14 | 678<sub>(+new) | 975<sub>(+new) | 1119<sub>(+new) |  |
| 1.1.0 | 2026-05-14 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+ChessCore+<version>&body=###%20Engine%20name%0AChessCore%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-13 06:25:39

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [678, 648, 676, 690, 1420]
  line "STC (8.0+0.08s)" [678, 648, 676, 690, 1420]
  line "LTC (60.0+0.60s)" [975, 981, 643, 1044, 1820]
  line "VLTC (2m24s+1.12s)" [1119, 980, 680, 1068, 1879]
  line "VLTC (2m24s+1.12s)" [1119, 980, 680, 1068, 1879]
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
  x-axis ["1.1.1", "1.1.2", "1.1.4", "1.1.5", "1.2.0"]
  y-axis "Elo Rating" 600 --> 1900
  line "STC (8.0+0.08s)" [678, 648, 676, 690, 1420]
  line "STC (8.0+0.08s)" [678, 648, 676, 690, 1420]
  line "LTC (60.0+0.60s)" [975, 981, 643, 1044, 1820]
  line "VLTC (2m24s+1.12s)" [1119, 980, 680, 1068, 1879]
  line "VLTC (2m24s+1.12s)" [1119, 980, 680, 1068, 1879]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1879 | 43 | 182 | 59% | 1779 | 38% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 1820 | 41 | 200 | 55% | 1751 | 34% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1420 | 49 | 156 | 59% | 1300 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.5 | VLTC <sub>(2m24s+1.12s)</sub> | 1068 | 60 | 102 | 49% | 1083 | 17% |
| 1.1.5 | LTC <sub>(60.0+0.60s)</sub> | 1044 | 59 | 104 | 57% | 972 | 20% |
| 1.1.5 | STC <sub>(8.0+0.08s)</sub> | 690 | 77 | 50 | 49% | 702 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.4 | VLTC <sub>(2m24s+1.12s)</sub> | 680 | 39 | 244 | 52% | 648 | 46% |
| 1.1.4 | LTC <sub>(60.0+0.60s)</sub> | 643 | 41 | 218 | 53% | 597 | 42% |
| 1.1.4 | STC <sub>(8.0+0.08s)</sub> | 676 | 42 | 234 | 52% | 626 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 980 | 53 | 120 | 53% | 957 | 27% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 981 | 57 | 104 | 53% | 953 | 25% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 648 | 89 | 44 | 55% | 605 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 1119 | 31 | 412 | 49% | 1111 | 19% |
| 1.1.1 | LTC <sub>(60.0+0.60s)</sub> | 975 | 36 | 328 | 48% | 977 | 19% |
| 1.1.1 | STC <sub>(8.0+0.08s)</sub> | 678 | 42 | 248 | 45% | 717 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |