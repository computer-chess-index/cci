# Engine: Crafty

Author: Robert M. Hyatt

Home: https://github.com/stevemaughan/Crafty-Chess

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 25.6.1 | 2026-06-24 | 2460<sub>(-42) | 2780<sub>(+7) | 2847<sub>(-74) |  |
| 25.2.1 | 2026-06-20 | 2502 | 2773 | 2921 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Crafty+<version>&body=###%20Engine%20name%0ACrafty%0A%0A###%20Version%0A25.6.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-07-09 06:24:08

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2502, 2460]
  line "STC (8.0+0.08s)" [2502, 2460]
  line "LTC (60.0+0.60s)" [2773, 2780]
  line "VLTC (2m24s+1.12s)" [2921, 2847]
  line "VLTC (2m24s+1.12s)" [2921, 2847]
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
  x-axis ["25.2.1", "25.6.1"]
  y-axis "Elo Rating" 2400 --> 3000
  line "STC (8.0+0.08s)" [2502, 2460]
  line "STC (8.0+0.08s)" [2502, 2460]
  line "LTC (60.0+0.60s)" [2773, 2780]
  line "VLTC (2m24s+1.12s)" [2921, 2847]
  line "VLTC (2m24s+1.12s)" [2921, 2847]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.6.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2847 | 41 | 186 | 48% | 2865 | 34% |
| 25.6.1 | LTC <sub>(60.0+0.60s)</sub> | 2780 | 48 | 144 | 53% | 2753 | 28% |
| 25.6.1 | STC <sub>(8.0+0.08s)</sub> | 2460 | 44 | 168 | 52% | 2439 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 25.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2921 | 51 | 130 | 50% | 2925 | 28% |
| 25.2.1 | LTC <sub>(60.0+0.60s)</sub> | 2773 | 56 | 112 | 49% | 2786 | 24% |
| 25.2.1 | STC <sub>(8.0+0.08s)</sub> | 2502 | 59 | 96 | 52% | 2485 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |