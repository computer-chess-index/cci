# Engine: Zugblitz

Author: 

Home: https://github.com/P1X3R/zugblitz

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.2 | 2026-06-13 | 1827<sub>(-24) | 2082<sub>(-52) | 2191<sub>(+16) |  |
| 1.3.1 | 2026-01-10 | 1851 | 2134 | 2175 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Zugblitz+<version>&body=###%20Engine%20name%0AZugblitz%0A%0A###%20Version%0A1.3.2" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-12 06:42:50

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1800 --> 2200
  line "STC (8.0+0.08s)" [1851, 1827]
  line "STC (8.0+0.08s)" [1851, 1827]
  line "LTC (60.0+0.60s)" [2134, 2082]
  line "VLTC (2m24s+1.12s)" [2175, 2191]
  line "VLTC (2m24s+1.12s)" [2175, 2191]
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
  x-axis ["1.3.1", "1.3.2"]
  y-axis "Elo Rating" 1800 --> 2200
  line "STC (8.0+0.08s)" [1851, 1827]
  line "STC (8.0+0.08s)" [1851, 1827]
  line "LTC (60.0+0.60s)" [2134, 2082]
  line "VLTC (2m24s+1.12s)" [2175, 2191]
  line "VLTC (2m24s+1.12s)" [2175, 2191]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2191 | 33 | 300 | 49% | 2209 | 33% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2082 | 33 | 298 | 54% | 2044 | 34% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 1827 | 36 | 260 | 49% | 1835 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2175 | 27 | 456 | 49% | 2184 | 35% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2134 | 28 | 422 | 49% | 2141 | 28% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 1851 | 24 | 614 | 51% | 1829 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |